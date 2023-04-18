import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {

    const [residentInfo, setResidentInfo] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios.get(resident)
          .then((res) => setResidentInfo(res.data))
          .catch((err) => console.log(err))
    }, [])

    return (
        <article>
            <div className="relative border-2 border-[#8EFF8B]">
                <img className="w-full" src={residentInfo?.image} alt="" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center">
                    <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
                    <span className="font-firacode">{residentInfo?.status}</span>
                </div>
            </div>
            <section className="bg-[#000000] border-2 border-[#8EFF8B] p-2">
                <h3 className="font-firacode text-center text-white text-[20px] p-2">{residentInfo?.name}</h3>
                <ul>
                    <li className="grid grid-cols-2">
                        <span className="font-firacode pl-9 col-span-1 p-2 text-[#938686]">Species</span>
                        <span className="font-firacode pl-3 col-span-1 p-2 text-[#FBFBFB]">{residentInfo?.species}</span> 
                    </li>
                    <li className="grid grid-cols-2">
                        <span className="font-firacode pl-9 col-span-1 p-2 text-[#938686]">Origin</span>
                        <span className="font-firacode pl-3 col-span-1 p-2 text-[#FBFBFB]">{residentInfo?.origin.name}</span> 
                    </li>
                    <li className="grid grid-cols-2">
                        <span className="font-firacode pl-9 col-span-1 p-2 text-[#938686]">Times appear</span>
                        <span className="font-firacode pl-3 col-span-1  p-2 text-[#FBFBFB]">{residentInfo?.episode.length} time</span> 
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard
