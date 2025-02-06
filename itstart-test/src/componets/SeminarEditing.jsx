import { useEffect  } from "react";

const SeminarEditing = ({ clickCompleteEditing, clickCancelEditingSeminar, seminar, newSeminar, setNewSeminar }) => {
    
    useEffect(() => {
        setNewSeminar({ ...seminar });
    }, [seminar]);

    const handleCancel = () => { // функция для сохранения не измененных полей
        setNewSeminar({ ...seminar }); // Сброс к оригинальным данным
        clickCancelEditingSeminar();   // Закрытие окна редактирования
    };

    return (
        <div className="fixed top-0 left-0 h-full w-full z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8 rounded-3xl">
                <div className="flex flex-col lg:flex-row justify-center items-center items-center gap-10 mb-5">
                    <img className="rounded-2xl md:w-1/2 md:h-1/2" src={seminar.photo} alt="seminar photo"/>
                    <div className="flex flex-col justify-between mt-5">
                        <input 
                            type="text" 
                            className="w-full md:100% border border-slate-200 rounded-md py-2 pl-2 pr-4 outline-none focus:border-gray-400 mb-2 text-2xl"
                            value={newSeminar.title}
                            onChange={(e) => setNewSeminar({ ...newSeminar, title: e.target.value })} 
                        />
                        <div className="flex flex-col gap-1">
                            <input 
                                type="text" 
                                className="border border-slate-200 rounded-md py-2 pl-2 pr-4 outline-none focus:border-gray-400"
                                value={newSeminar.description}
                                onChange={(e) => setNewSeminar({ ...newSeminar, description: e.target.value })} 
                            />
                            <span>Date:</span>
                            <input 
                                type="date" 
                                className="border border-slate-200 rounded-md py-2 pl-2 pr-4 outline-none focus:border-gray-400"
                                value={newSeminar.date}
                                onChange={(e) => setNewSeminar({ ...newSeminar, date: e.target.value })} 
                            />
                            <span>Time:</span>
                            <input 
                                type="time" 
                                className="border border-slate-200 rounded-md py-2 pl-2 pr-4 outline-none focus:border-gray-400"
                                value={newSeminar.time}
                                onChange={(e) => setNewSeminar({ ...newSeminar, time: e.target.value })} 
                            />
                        </div>
                    </div>  
                </div>
                <div className="flex justify-center gap-5">
                    <button 
                        className="bg-sky-600 text-white pr-4 pl-4 pt-2 pb-2 rounded-lg hover:bg-sky-700 cursor-pointer transition" 
                        onClick={clickCompleteEditing}
                    >
                        Edit
                    </button>
                    <button 
                        className="bg-red-600 text-white pr-4 pl-4 pt-2 pb-2 rounded-lg hover:bg-red-700 cursor-pointer transition" 
                        onClick={() => handleCancel()}
                    >
                        Cancel
                    </button>
                </div>        
            </div>
        </div>
    )
}

export default SeminarEditing;