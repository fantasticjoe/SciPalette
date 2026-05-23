import { hexToRgb } from "./palette-utils";

type AseColor = {
  name: string;
  hex: string;
  r: number;
  g: number;
  b: number;
};

function sanitizeName(name: string): string {
  return name.trim().replace(/\s+/g, " ") || "SciPalette";
}

function encodeUtf16Be(value: string): Uint8Array {
  const bytes = new Uint8Array((value.length + 1) * 2);

  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    bytes[index * 2] = (code >> 8) & 0xff;
    bytes[index * 2 + 1] = code & 0xff;
  }

  return bytes;
}

function writeAscii(bytes: Uint8Array, offset: number, value: string): number {
  for (let index = 0; index < value.length; index += 1) {
    bytes[offset + index] = value.charCodeAt(index);
  }

  return offset + value.length;
}

function writeUint16(bytes: Uint8Array, offset: number, value: number): number {
  const view = new DataView(bytes.buffer);
  view.setUint16(offset, value, false);
  return offset + 2;
}

function writeUint32(bytes: Uint8Array, offset: number, value: number): number {
  const view = new DataView(bytes.buffer);
  view.setUint32(offset, value, false);
  return offset + 4;
}

function writeFloat32(bytes: Uint8Array, offset: number, value: number): number {
  const view = new DataView(bytes.buffer);
  view.setFloat32(offset, value, false);
  return offset + 4;
}

function buildColorBlock(color: AseColor): Uint8Array {
  const nameBytes = encodeUtf16Be(color.name);
  const blockLength = 2 + nameBytes.length + 4 + 12 + 2;
  const bytes = new Uint8Array(6 + blockLength);
  let offset = 0;

  offset = writeUint16(bytes, offset, 0x0001);
  offset = writeUint32(bytes, offset, blockLength);
  offset = writeUint16(bytes, offset, color.name.length + 1);
  bytes.set(nameBytes, offset);
  offset += nameBytes.length;
  offset = writeAscii(bytes, offset, "RGB ");
  offset = writeFloat32(bytes, offset, color.r / 255);
  offset = writeFloat32(bytes, offset, color.g / 255);
  offset = writeFloat32(bytes, offset, color.b / 255);
  writeUint16(bytes, offset, 0);

  return bytes;
}

function buildGroupStartBlock(name: string): Uint8Array {
  const nameBytes = encodeUtf16Be(name);
  const blockLength = 2 + nameBytes.length;
  const bytes = new Uint8Array(6 + blockLength);
  let offset = 0;

  offset = writeUint16(bytes, offset, 0xc001);
  offset = writeUint32(bytes, offset, blockLength);
  offset = writeUint16(bytes, offset, name.length + 1);
  bytes.set(nameBytes, offset);

  return bytes;
}

function buildGroupEndBlock(): Uint8Array {
  const bytes = new Uint8Array(6);
  writeUint16(bytes, 0, 0xc002);
  writeUint32(bytes, 2, 0);
  return bytes;
}

export function createAdobeAseBuffer(colors: string[], paletteName: string): ArrayBuffer {
  const safeName = sanitizeName(paletteName);
  const aseColors = colors
    .map((hex, index): AseColor | null => {
      const rgb = hexToRgb(hex);

      if (!rgb) {
        return null;
      }

      return {
        name: `${safeName} ${index + 1}`,
        hex,
        ...rgb,
      };
    })
    .filter((color): color is AseColor => Boolean(color));

  const blocks = [buildGroupStartBlock(safeName), ...aseColors.map(buildColorBlock), buildGroupEndBlock()];
  const totalLength = 12 + blocks.reduce((sum, block) => sum + block.length, 0);
  const bytes = new Uint8Array(totalLength);
  let offset = 0;

  offset = writeAscii(bytes, offset, "ASEF");
  offset = writeUint16(bytes, offset, 1);
  offset = writeUint16(bytes, offset, 0);
  offset = writeUint32(bytes, offset, blocks.length);

  for (const block of blocks) {
    bytes.set(block, offset);
    offset += block.length;
  }

  return bytes.buffer;
}

export function createAdobeAseFilename(paletteName: string): string {
  const slug = paletteName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${slug || "scipalette"}.ase`;
}
