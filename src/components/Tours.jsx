import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getData } from '../utils'
import { MyCard } from './MyCard'

export const Tours = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        getData(setData)
    },[])
    data && console.log(data);
    
  return (
    <div className='flex-1 flex flex-wrap justify-center gap-5'>
            {data && data.map(obj=><MyCard key={obj.id} {...obj}/>)}
    </div>
  )
}


