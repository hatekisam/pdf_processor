"use client"
import React from 'react'

const Tab5 = () => {
        return (
                <div className='w-full h-full'>
                        <div className="flex h-full w-full">
                       
                                <div className=" h-full w-[20%] flex flex-col overflow-auto p-4 gap-5">
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center gap-4 overflow-auto'>
                                                <h1>Author name</h1>
                                        </div>
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                <h1>ISBN</h1>
                                        </div>
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                <h1>Publish Date</h1>
                                        </div>
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                <h1>...</h1>
                                        </div>
                                </div>
                                <div className="h-full p-5 border-4 flex-grow flex items-center justify-center flex-col text-center gap-5" >
                                        <h1 className='text-[2rem] font-bold w-full border-2 text-blue-500 border-blue-500 rounded-lg p-3'>This is the page 2  in the pdf book</h1>

                                        <div>
                                              
                                                <p className='p-2  border-black border-2 rounded-lg'>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt earum atque qui magnam aspernatur repellendus architecto perferendis incidunt, voluptates repellat iste unde magni numquam deserunt hic quo harum. Dolores, eligendi! Officiis optio nesciunt, nisi, accusamus sit impedit numquam consectetur dolores perspiciatis enim vitae error, tenetur obcaecati. Dolorem, molestias ex?</p>
                                        </div>
                                        <div>
                                          
                                                <p className='p-2  border-black border-2 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt earum atque qui magnam aspernatur repellendus architecto perferendis incidunt, voluptates repellat iste unde magni numquam deserunt hic quo harum. Dolores, eligendi! Officiis optio nesciunt, nisi, accusamus sit impedit numquam consectetur dolores perspiciatis enim vitae error, tenetur obcaecati. Dolorem, molestias ex?</p>
                                        </div>
                                </div>

                              
                        </div>
                </div>
        )
}

export default Tab5