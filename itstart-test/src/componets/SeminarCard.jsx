const SeminarCard = ({seminar, alertDeleteSeminar }) => {
    return (
        <div className="flex gap-10 relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition group">
            <img className="rounded-2xl" src={seminar.photo} alt="seminar photo" style={{ width: "20%" }} />
            <div className="flex flex-col justify-between mt-5">
                    <h1 className="mt-2 text-2xl">{seminar.title}</h1>
                    <div className="flex flex-col gap-1">
                    <p>{seminar.description}</p>
                    <span>Data and time:</span>
                    <b>{seminar.date} - {seminar.time}</b>
                    <div className="">
                        <button 
                            onClick={alertDeleteSeminar}
                            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 cursor-pointer transition opacity-0 group-hover:opacity-100"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    )  
}

export default SeminarCard;


