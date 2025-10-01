import React from 'react'
import { MyModal } from './MyModal'
import { useState } from 'react'

export const MyCard = ({ id, image, info, name, lenght }) => {
    //<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{info}</p>
    const [open, setOpen]=useState(false)
    
    return (


        <div className="max-w-sm h-85 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <div className='h-48 overflow-hidden'>
                    <img className="rounded-t-lg object-cover w-full h-full" src={image} alt="" />
                </div>
            </a>
            <div className="p-5 ">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                
                <a href="#" onClick={()=>setOpen(true)}
                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                     aria-hidden="true" xmlns=""
                      fill="none" viewBox="0 0 14 10">

                        <path stroke="currentColor"
                         stroke-linecap="round"
                          stroke-linejoin="round"
                           stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
       

         {open && <MyModal open={open} setOpen={setOpen} id={id} info={info} image={image} name={name} lenght={lenght}/>}
         </div>

    )
}

