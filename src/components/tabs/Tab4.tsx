"use client"
import React from 'react'

const Tab4 = () => {
        return (
                <div className='w-full h-full'>
                        <div className="flex h-full w-full">
                                <div className="w-[20%] h-full p-2 flex flex-col items-center gap-5 overflow-auto">
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                </div>
                                                <p>Page 1</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                </div>
                                                <p>Page 2</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                </div>
                                                <p>Page 3</p>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-3'>
                                                <div className='w-[40%] h-[150px] border-2 border-green-500 rounded-md'>

                                                </div>
                                                <p>Page 4</p>
                                        </div>
                                </div>

                                <div className="h-full w-[40%] border-4 flex-grow flex items-center justify-center flex-col text-center gap-5" >
                                        <h1 className='text-[2rem] font-bold'>This is the page 2 in the PDF</h1>

                                        <div className='text-center p-5  leading-7'>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vitae in cum ipsum aliquam saepe a maxime quisquam. Numquam, consectetur suscipit distinctio eum cumque quidem sapiente aspernatur reiciendis quos, natus minus modi fugit, sit nostrum officia fuga unde! A molestiae qui impedit expedita, quis dolore saepe id? Consequuntur, doloremque sunt.</p>
                                        </div>
                                        <div className='text-center p-5  leading-7'>
                                             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt earum atque qui magnam aspernatur repellendus architecto perferendis incidunt, voluptates repellat iste unde magni numquam deserunt hic quo harum. Dolores, eligendi! Officiis optio nesciunt, nisi, accusamus sit impedit numquam consectetur dolores perspiciatis enim vitae error, tenetur obcaecati. Dolorem, molestias ex?</p>
                                        </div>
                                </div>

                                <div className=" h-full w-[30%] flex flex-col overflow-auto p-4 gap-5">
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center gap-4 overflow-auto'>
                                                <h1 className='text-[1.22rem] font-bold'>This is the page 2 in the PDF</h1>
                                        </div>
                                        <div className='w-full p-2 rounded-md border-2 border-black text-center'>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nesciunt earum atque qui magnam aspernatur repellendus architecto perferendis incidunt, voluptates repellat iste unde magni numquam deserunt hic quo harum. Dolores, eligendi! Officiis optio nesciunt, nisi, accusamus sit impedit numquam consectetur dolores perspiciatis enim vitae error, tenetur obcaecati. Dolorem, molestias ex?</p>
                                        </div>
                                       
                                </div>
                        </div>
                </div>
        )
}

export default Tab4