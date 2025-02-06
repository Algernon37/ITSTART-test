const SeminarsAbsence = () => {
    
    const OnClickToLink = (link) => {
        window.location.href = link; 
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-slate-100">Здесь пока нет семинаров</h1>
            <img className="cursor-pointer" onClick={() => OnClickToLink('https://github.com/Algernon37')} style={{ width: "40%" }} src="dino.png" alt="dino" />
        </div>
    )
}

export default SeminarsAbsence;