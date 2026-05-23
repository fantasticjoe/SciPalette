export type ClipboardLike = {
  writeText: (value: string) => Promise<void>;
};

type CopyOptions = {
  clipboard?: ClipboardLike;
};

export async function safeCopyText(value: string, options: CopyOptions = {}): Promise<boolean> {
  const clipboard = options.clipboard ?? globalThis.navigator?.clipboard;

  if (!clipboard?.writeText) {
    return false;
  }

  try {
    await clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
