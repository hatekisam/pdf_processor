"use client"
import React from 'react'

const Tab3 = () => {
        return (
                <div className='w-full h-full'>
                        <div className="flex h-full w-full">
                                <div className="w-[20%] h-full p-2 flex flex-col items-center gap-5 overflow-auto">
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md '>
                                                <p className='text-right pr-1 cursor-pointer text-red-500 font-bold'>x</p>
                                                </div>
                                                <p>Page 1</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>
                                                        <p className='text-right pr-1 cursor-pointer text-red-500 font-bold'>x</p>
                                                </div>
                                                <p>Page 2</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>
                                                        <p className='text-right pr-1 cursor-pointer text-red-500 font-bold'>x</p>
                                                </div>
                                                <p>Page 3</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>
                                                        <p className='text-right pr-1 cursor-pointer text-red-500 font-bold'>x</p>
                                                </div>
                                                <p>Page 4</p>
                                        </div>
                                </div>

                                <div className="h-full border-4 flex-grow flex items-center justify-center flex-col text-center gap-5" >
                                        <h1 className='text-[2rem] font-bold'>This is the PDF</h1>

                                        <div>
                                                <h1 className='font-bold mb-5 text-[1.2rem]'>Author</h1>
                                                <p className='p-2 border-dashed border-2'> Andrew</p>
                                        </div>
                                        <div>
                                                <h1 className='font-bold mb-5 text-[1.2rem]'>ISBN</h1>
                                                <p className='p-2 border-dashed border-2'> 123456789</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Tab3