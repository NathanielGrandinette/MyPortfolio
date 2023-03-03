import './resume.css'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-slate via-slate to-slate
  text-green rounded-md ring-2 ring-slate px-10 py-2 
  hover:bg-white hover:text-blue hover:ring-slate mx-10 shadow-lg shadow-slate`;

function resume() {
  return (
    <>
      <div className="sm:min-w-full max-w-xl flex flex-col align-center mx-auto resume-page">
        <Document
          className="mx-auto d-flex flex-wrap"
          file='./images/nathan-grandinette-resume.pdf'
          options={options}
        >
          <Page className='resume' size="A4" height={1000} pageIndex={0} />
          <Page className='resume' size="A4" height={1000} pageIndex={1} />
        </Document>
      </div>
      <div className="py-5 border-t-3/2">
        <div className="flex justify-center mt-4">
          <a
            href='./images/nathan-resume.pdf'
            download="nathan-grandinette-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={buttonStyling}
          >
            <span className="sr-only">Download</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default resume;