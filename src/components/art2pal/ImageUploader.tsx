import { ImageUp, Loader2 } from "lucide-react";

type ImageUploaderProps = {
  previewUrl?: string;
  isBusy: boolean;
  statusLabel: string;
  error?: string;
  imageInfo?: string;
  onFileSelect: (file: File) => void;
};

export function ImageUploader({ previewUrl, isBusy, statusLabel, error, imageInfo, onFileSelect }: ImageUploaderProps) {
  return (
    <section className="sp-panel sp-lift rounded-lg p-5">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Local image input</p>
        <h2 className="font-display mt-1 text-3xl font-bold tracking-[-0.02em] text-[#212c33]">Upload artwork</h2>
        <p className="mt-1 text-sm leading-6 text-[rgb(33_44_51_/_0.68)]">Image processing stays in this browser tab. Nothing is uploaded or stored.</p>
      </div>

      <label className="flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[rgb(79_109_95_/_0.3)] bg-[rgb(251_249_242_/_0.72)] p-4 text-center transition-colors hover:bg-[rgb(122_158_141_/_0.1)]">
        <input
          id="art2pal-image-upload"
          name="art2pal-image-upload"
          className="sr-only"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          disabled={isBusy}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              onFileSelect(file);
            }
            event.currentTarget.value = "";
          }}
        />
        {previewUrl ? (
          <img src={previewUrl} alt="Uploaded artwork preview" className="max-h-80 w-full rounded-md object-contain" />
        ) : (
          <span className="flex flex-col items-center gap-3">
            <ImageUp className="h-10 w-10 text-[#4f6d5f]" aria-hidden="true" />
            <span className="font-display text-2xl font-bold text-[#212c33]">Choose an artwork image</span>
            <span className="max-w-sm text-sm leading-6 text-[rgb(33_44_51_/_0.64)]">PNG, JPEG, or WebP. Large files are resized before sampling.</span>
          </span>
        )}
      </label>

      <div className="mt-4 min-h-6">
        {isBusy ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f6d5f]">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {statusLabel}
          </p>
        ) : (
          <p className="text-sm font-medium text-[rgb(33_44_51_/_0.6)]">{imageInfo ?? statusLabel}</p>
        )}
        {error && <p className="mt-2 text-sm font-semibold text-[#9a3f35]">{error}</p>}
      </div>
    </section>
  );
}
