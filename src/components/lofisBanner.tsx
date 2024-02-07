interface lofiProps {
    name: string,
    image: string,
    id: number,
    toogle: (event: any) => void,
    volume: (volume: string, name: string) => void
}

export default function LofisBanner({ name, image, id, toogle, volume }: lofiProps) {

    return (
        <div className={`hover:cursor-pointer transition-all relative shadow-none`} id={name} onClick={toogle}>
            <img className='w-[300px] h-[160px] md:h-[250px] lg:h-[260px] rounded-lg object-cover' src={image} alt={name} />
            <div className="absolute flex p-2 w-full">
                <input type="range" max="100" min="0" className="relative z-2 w-full bottom-10" onChange={(event) => volume(event.target.value, name)} />
            </div>
        </div>
    )
}