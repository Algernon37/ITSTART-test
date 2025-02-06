const SeminarCard = ({seminar, alertDeleteSeminar, StartSeminarEditing }) => {
    return (
        <div className="flex flex-col items-center md:flex-row gap-10 relative bg-white rounded-3xl md:p-8 p-4 border border-slate-100 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-slate-900  transition group">
            <img className="rounded-2xl md:w-1/4 md:h-1/4" src={seminar.photo} alt="seminar photo"/>
            <div className="flex flex-col justify-between mt-5">
                    <h1 className="mt-2 text-2xl">{seminar.title}</h1>
                    <div className="flex flex-col gap-1">
                    <p>{seminar.description}</p>
                    <span>Data and time:</span>
                    <b>{seminar.date} - {seminar.time}</b>
                    <div className="flex gap-2">
                        <button 
                            onClick={alertDeleteSeminar}
                            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 cursor-pointer transition opacity-0 group-hover:opacity-100"
                        >
                            Delete
                        </button>
                        <button 
                            onClick={StartSeminarEditing}
                            className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-700 cursor-pointer transition opacity-0 group-hover:opacity-100"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    )  
}

export default SeminarCard;


