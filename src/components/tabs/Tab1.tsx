"use client"
import Image from 'next/image'
import React from 'react'

const Tab1 = () => {
        return (
                <div className='flex items-center justify-center w-full h-full '>
                        <div className="border-dashed border-2 p-5 gap-3 flex flex-col items-center justify-center rounded-2xl w-[40%]">
                                <Image src="/svg/pdf.svg" alt="" width={100} height={100} />
                                <p className='text-2xl'>Upload your PDF file</p>
                                {/* <button className='px-4 py-2 rounded-md bg-blue-500 text-white'>Browse</button> */}
                                <label htmlFor="file" className='px-4 py-2 rounded-md bg-blue-500 text-white block'>Browse</label>
                        </div>
                </div>
        )
}

export default Tab1