import { useState, useEffect } from 'react'
import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({location}) => {

    const [currentPage, setCurrentPage] = useState(1)

    const RESIDENTS_PER_PAGE = 20

    const arrayPages = []
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

    for(let i=1; i <= quantityPages; i++){
        arrayPages.push(i)
    }

    const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
    const endCut = startCut + RESIDENTS_PER_PAGE

    const residents = location?.residents

    useEffect(() => {
       setCurrentPage(1)
    }, [location])

    return (
        <>
          <section className="p-2 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto">
              {residents?.slice(startCut, endCut).map((resident) => ( 
                  <ResidentCard key={resident} resident={resident} />
              ))}
          </section>
          <ul className="text-[#FBFBFB] flex gap-4 justify-center py-4">
            {
              arrayPages.map(page => <li onClick={() => setCurrentPage(page)} className={`cursor-pointer p-3 rounded-md ${page == currentPage && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li>)
            }      
          </ul> 
        </>
    )
}

export default ResidentList
