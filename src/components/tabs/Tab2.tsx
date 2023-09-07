"use client"
import React, { useEffect, useRef, useState } from 'react'
import * as PDFJS from "pdfjs-dist/build/pdf";
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;


const Tab2 = () => {
        
        return (
                <div className='w-full h-full'>
                        <div className="flex h-full">
                                <div className="w-[25%] h-full"></div>
                                <div className="w-[50%] h-full" ref={pageRenderRef}>
                                </div>
                                <div className="w-[25%] h-full"></div>
                        </div>
                </div>
        )
}

export default Tab2