"use client";



import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Load the worker from a CDN that always matches the exact pdfjs-dist
// version bundled inside react-pdf. This avoids version-mismatch errors
// (e.g. JpxError / broken dynamic imports) that happen when a manually
// copied local worker file falls out of sync with the installed package.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
  fileUrl: string;
  pageWidth?: number; // width of a single page (spread = 2x this)
  pageHeight?: number;
}

const PdfFlipbook: React.FC<PdfFlipbookProps> = ({
  fileUrl,
  pageWidth = 420,
  pageHeight = 594, // ~A4 ratio
}) => {
  const [numPages, setNumPages] = useState<number>(10);
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex w-full flex-col items-center gap-4 bg-gray-100 py-10">
      {loading && (
        <p className="text-sm font-medium text-slate-600">Loading book...</p>
      )}

      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages: n }) => {
          setNumPages(n);
          setLoading(false);
        }}
        loading={null}
      >
        {numPages > 0 && (
          // @ts-expect-error react-pageflip has no official TS types
          <HTMLFlipBook
            width={pageWidth}
            height={pageHeight}
            size="stretch"
            minWidth={280}
            maxWidth={900}
            minHeight={400}
            maxHeight={1200}
            showCover={true}
            usePortrait={false}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={700}
            className="shadow-2xl"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white"
              >
                <Page
                  pageNumber={i + 1}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
};

export default PdfFlipbook;