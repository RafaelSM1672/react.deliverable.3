import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {

  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`
    console.log(URL)
    
    axios.get(URL)
      .then ((res)=> setLocation(res.data))
      .catch ((err)=> console.log(err))
  }, [])

  return (
    <div className="App overflow-x-hidden">
      <header className="relative flex justify-center items-center bg-[url('/images/bgHeader.png')] bg-cover bg-no repeat bg-center h-[610px] sm:h-[630px] md:h-[650px] lg:h-[670px] overflow-x-hidden">
        <img src="/images/banner-RyM.png" alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 min-w-[600px] max-h-[300px] pr-2" />
        <form onSubmit={handleSubmit} className="absolute top-[202px] sm:top-[222px] md:top-[242px] lg:top-[262px]">
          <div className="flex items-center border-2 border-[#8EFF8B] m-4">
            <input id="locationId" placeholder="Type a Id..." type="text" className="font-firacode h-[50px] w-[190px] sm:w-[420px] md:w-[520px] lg:w-[620px] p-2 sm:p-4 text-[#938686] text-[20px] sm:text-[28px] text-center bg-[#000000] placeholder-[#938686] border-2 border-[#8EFF8B]"  />
            <button className="font-firacode text-[14px] sm:text-[20px] h-[50px] w-[90px] sm:w-[120px] bg-[#8EFF8B] text-[#FBFBFB] p-1">Search <i className='bx bx-search'></i></button>
          </div>
        </form>
        <div className="absolute top-[320px] sm:top-[340px] md:top-[360px] lg:top-[380px]">
          <h2 className="flex font-firacode justify-center text-[16px] sm:text-[24px] text-[#8EFF8B]">Welcome to the crazy universe!</h2>
        </div>
        <Location location={location} />
      </header>
      <main className="bg-[url('/images/bgMain.png')] overflow-x-hidden">
        <ResidentList location={location} />
      </main>
    </div>
  )
}

export default App
