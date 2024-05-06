"use client"
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };


  return (
    <>
      {loading &&
        <div className="flex justify-center items-center h-full">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>}
      <iframe
        src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`}
        className="w-full h-full"
        onLoad={handleLoad}
      ></iframe>
    </>
  );
};

export default PDFViewer;