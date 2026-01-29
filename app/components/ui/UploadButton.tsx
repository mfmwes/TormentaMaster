import React, { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type Props = {
  onUploadComplete: (storageId: string) => void;
  label?: string;
  className?: string;
  compact?: boolean;
};

export const UploadButton = ({ onUploadComplete, label = "Upload", className, compact = false }: Props) => {
  const gerarUrl = useMutation(api.mesa.gerarUrlUpload);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const postUrl = await gerarUrl();
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!result.ok) throw new Error("Falha no upload");
      const { storageId } = await result.json();
      onUploadComplete(storageId);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar imagem.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className={className || `bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold py-1 px-3 rounded text-xs transition flex items-center gap-2 ${uploading ? "opacity-50 cursor-wait" : ""}`}
        title="Enviar imagem do dispositivo"
      >
        {uploading ? "..." : (compact ? "📁" : `📁 ${label}`)}
      </button>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
    </>
  );
};