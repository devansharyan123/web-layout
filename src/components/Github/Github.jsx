import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
 function Github() {
    const data = useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(()=> {
//         fetch('https://api.github.com/users/devansharyan123')
//         .then((response) => response.json() )
//         .then((data) => {
//             console.log(data);
//             setData(data)
//         })
//     })
  return (
    <div className='bg-gray-600 text-white text-center m-4 p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='git-img' width={300}/>
    </div>
  )
 }

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/devansharyan123')
    return response.json()
}