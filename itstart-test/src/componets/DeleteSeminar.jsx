const DeleteSeminar = ({ clickDeleteSeminar, clickCancelDeleteSeminar }) => {
    return (
        <div className="fixed top-0 left-0 h-full w-full z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white w-100 max-w-full h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8 rounded-3xl">
                <h1 className="text-xl font-bold mb-4 text-center">Вы уверены, что хотите удалить семинар?</h1>
                <div className="flex justify-center gap-5">
                    <button 
                        className="bg-red-600 text-white pr-4 pl-4 pt-2 pb-2 rounded-lg hover:bg-red-700 cursor-pointer transition" 
                        onClick={clickDeleteSeminar}
                    >
                        Да
                    </button>
                    <button 
                        className="bg-green-600 text-white pr-4 pl-4 pt-2 pb-2 rounded-lg hover:bg-green-700 cursor-pointer transition" 
                        onClick={clickCancelDeleteSeminar}
                    >
                        Нет
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteSeminar;