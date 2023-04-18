import React from 'react'

const Location = ({location}) => {

    return (
        <section className="absolute top-[382px] sm:top-[402px] md:top-[422px] lg:top-[442px]">
          <h2 className="relative font-firacode text-center text-[22px] sm:text-[28px] lg:text-[34px] text-[#FBFBFB] mb-8">{location?.name}</h2>
          <ul className="md:grid md:grid-cols-3 md:justify-center md:items-center-stretch">
              <li className="grid grid-cols-2 md:col-span-1 md:flex md:justify-center md:items-center font-firacode text-[14px] sm:text-[18px] text-[#FBFBFB] mb-4">
                  <span className="pl-6 md:pl-4">Type: </span>
                  <span className="pl-4 md:pl-2 md:text-center">{location?.type}</span>
              </li>
              <li className="grid grid-cols-2 md:col-span-1 md:flex md:justify-center md:items-center font-firacode text-[14px] sm:text-[18px] text-[#FBFBFB] mb-4">
                   <span className="pl-6 md:pl-4">Dimension: </span>
                   <span className="pl-4 md:pl-2 md:text-center">{location?.dimension}</span>
              </li>
              <li className="grid grid-cols-2 md:col-span-1 md:flex md:justify-center md:items-center font-firacode text-[14px] sm:text-[18px] text-[#FBFBFB] mb-4">
                   <span className="pl-6 md:pl-4">Population: </span>
                   <span className="pl-4 md:pl-2 md:text-center">{location?.residents.length}</span>
              </li>
          </ul>      
        </section>
    )
}

export default Location
