'use client'
import LofisBanner from '@/components/lofisBanner';
import { Headphones } from '@phosphor-icons/react'
import { useRef, useState } from 'react';

export default function Home() {

  const [coffee, setCoffee] = useState<boolean>(false)
  const [city, setCity] = useState<boolean>(false)
  const [forest, setForest] = useState<boolean>(false)
  const [lofi4, setLofi4] = useState<boolean>(false)
  const [lofi6, setLofi6] = useState<boolean>(false)
  const [train, setTrain] = useState<boolean>(false)
  const [rain, setRain] = useState<boolean>(false)
  const [waves, setWaves] = useState<boolean>(false)
  const [office, setOffice] = useState<boolean>(false)

  const coffeeRef = useRef<any>(null)
  const cityRef = useRef<any>(null)
  const forestRef = useRef<any>(null)
  const lofi4Ref = useRef<any>(null)
  const lofi6Ref = useRef<any>(null)
  const trainRef = useRef<any>(null)
  const rainRef = useRef<any>(null)
  const wavesRef = useRef<any>(null)
  const officeRef = useRef<any>(null)


  const lofis = [
    {
      id: 1,
      imageURL: 'https://wallpaperaccess.com/full/8183928.jpg',
      nameRef: 'lofi6'
    },

    {
      id: 2,
      imageURL: 'https://wallpaperaccess.com/full/4474866.jpg',
      nameRef: 'office'
    },

    {
      id: 3,
      imageURL: 'https://wallpaperaccess.com/full/2867806.jpg',
      nameRef: 'rain'
    },

    {
      id: 4,
      imageURL: 'https://i.ytimg.com/vi/QdhvOx85LBA/maxresdefault.jpg',
      nameRef: 'forest'
    },

    {
      id: 5,
      imageURL: 'https://wallpapercave.com/wp/wp9421134.jpg',
      nameRef: 'waves'
    },

    {
      id: 6,
      imageURL: 'https://i.ytimg.com/vi/1rQkJM9piA0/maxresdefault.jpg',
      nameRef: 'lofi4'
    },

    {
      id: 7,
      imageURL: 'https://i.ytimg.com/vi/ZgNzZr1vNs0/maxresdefault.jpg',
      nameRef: 'train'
    },

    {
      id: 8,
      imageURL: 'https://wallpapercave.com/wp/wp8174943.jpg',
      nameRef: 'coffee'
    },

    {
      id: 9,
      imageURL: 'https://wallpapercave.com/wp/wp4146504.jpg',
      nameRef: 'city'
    }
  ]

  function toogleBanner(event: any) {
    let classe = event.target.offsetParent.classList.value.split(" ")
    let searchClass = classe.find((item: any) => item == "shadow-none")

    if (searchClass) {
      event.target.offsetParent.classList.remove("shadow-none")
      event.target.offsetParent.classList.add("scale-105")
      event.target.offsetParent.classList.add("shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]")

      PlayStopMusic(event.target.offsetParent.id)
    } else {
      event.target.offsetParent.classList.add("shadow-none")
      event.target.offsetParent.classList.remove("scale-105")
      event.target.offsetParent.classList.remove("shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]")

      PlayStopMusic(event.target.offsetParent.id)
    }
  }

  function PlayStopMusic(name: string) {
    if (name == "coffee") {
      (!coffee) ? setCoffee(true) : setCoffee(false)
    } else if (name == "rain") {
      (!rain) ? setRain(true) : setRain(false)
    } else if (name == "city") {
      (!city) ? setCity(true) : setCity(false)
    } else if (name == "forest") {
      (!forest) ? setForest(true) : setForest(false)
    } else if (name == "lofi4") {
      (!lofi4) ? setLofi4(true) : setLofi4(false)
    } else if (name == "lofi6") {
      (!lofi6) ? setLofi6(true) : setLofi6(false)
    } else if (name == "waves") {
      (!waves) ? setWaves(true) : setWaves(false)
    } else if (name == "office") {
      (!office) ? setOffice(true) : setOffice(false)
    } else if (name == "train") {
      (!train) ? setTrain(true) : setTrain(false)
    } else {
      return;
    }
  }

  function changeVolume(volume: string, name: string) {
    if (name == "coffee" && coffee) {
      let volumeConvert = +volume / 100;
      coffeeRef.current.volume = volumeConvert
    } else if (name == "rain" && rain) {
      let volumeConvert = +volume / 100;
      rainRef.current.volume = volumeConvert
    } else if (name == "city" && city) {
      let volumeConvert = +volume / 100;
      cityRef.current.volume = volumeConvert
    } else if (name == "forest" && forest) {
      let volumeConvert = +volume / 100;
      forestRef.current.volume = volumeConvert
    } else if (name == "lofi4" && lofi4) {
      let volumeConvert = +volume / 100;
      lofi4Ref.current.volume = volumeConvert
    } else if (name == "lofi6" && lofi6) {
      let volumeConvert = +volume / 100;
      lofi6Ref.current.volume = volumeConvert
    } else if (name == "waves" && waves) {
      let volumeConvert = +volume / 100;
      wavesRef.current.volume = volumeConvert
    } else if (name == "office" && office) {
      let volumeConvert = +volume / 100;
      officeRef.current.volume = volumeConvert
    } else if (name == "train" && train) {
      let volumeConvert = +volume / 100;
      trainRef.current.volume = volumeConvert
    } else {
      return;
    }
  }

  return (
    <main className="flex flex-col">
      <header className="flex flex-row items-center justify-between px-8 py-7">
        <div className='flex flex-row gap-2 items-center'>
          <Headphones size={32} color='white' />
          <p className="text-white">Lofi Sounds</p>
        </div>

        <div>
          <img className="w-10" src="./logo.png" alt="logo" />
        </div>
      </header>

      <section className='flex flex-col items-center'>
        <div className='flex gap-2 flex-row text-white'>
          <h1 className='text-5xl font-bold animate-color-change-purple text-transparent'>relax.</h1>
          <h1 className='text-5xl font-bold animate-color-change-blue text-transparent'>chill.</h1>
          <h1 className='text-5xl font-bold animate-color-change-orange text-transparent'>code.</h1>
        </div>

        <div className='mx-auto grid grid-cols-2 gap-5 lg:grid-cols-3 px-10 py-8'>
          {
            lofis.map(lofi =>
              <LofisBanner key={lofi.id} toogle={toogleBanner} id={lofi.id} image={lofi.imageURL} name={lofi.nameRef} volume={changeVolume} />
            )
          }
        </div>

        <div className='-z-20'>
          {city ? <audio ref={cityRef} autoPlay src="./sounds/city.mp3" loop></audio> : ''}
          {coffee ? <audio ref={coffeeRef} autoPlay src="./sounds/coffee-shop.mp3" loop></audio> : ''}
          {forest ? <audio ref={forestRef} autoPlay src="./sounds/forest.mp3" loop></audio> : ''}
          {lofi6 ? <audio ref={lofi6Ref} autoPlay src="./sounds/lofi6.mp3" loop></audio> : ''}
          {rain ? <audio ref={rainRef} autoPlay src="./sounds/rain.mp3" loop></audio> : ''}
          {train ? <audio ref={trainRef} autoPlay src="./sounds/train-station.mp3" loop></audio> : ''}
          {waves ? <audio ref={wavesRef} autoPlay src="./sounds/waves.mp3" loop></audio> : ''}
          {lofi4 ? <audio ref={lofi4Ref} autoPlay src="./sounds/lofi4.mp3" loop></audio> : ''}
          {office ? <audio ref={officeRef} autoPlay src="./sounds/office.mp3" loop></audio> : ''}
        </div>
      </section>

      <footer className="h-full text-white pt-20 pb-5 flex justify-center items-center"><p className="flex gap-2 items-center">Build with<a href="https://tailwindcss.com/" target="_blank" title="TailwindCSS"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg></a><a href="https://vercel.com/" target="_blank" title="Vercel"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg></a><a href="https://reactjs.org/" target="_blank" title="React"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg></a>&amp;  🤍</p></footer>
    </main>
  );
}
