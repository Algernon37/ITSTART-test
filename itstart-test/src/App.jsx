import axios from "axios";
import { useEffect, useState } from "react";
import SeminarCard from "./componets/SeminarCard";
import DeleteSeminar from "./componets/DeleteSeminar";
import SeminarsAbsence from "./componets/SeminarsAbsence";
import SeminarEditing from "./componets/SeminarEditing";
import Loader from "./componets/Loader";

function App() {
  const [seminars, setSeminars] = useState(null);
  const [seminarToDelete, setSeminarToDelete] = useState(null);
  const [seminarToEdit, setSeminarToEdit] = useState(null);
  const [newSeminar, setNewSeminar] = useState({ title: '', description:'', date:'', time:''});
  const [loading, setLoading] = useState(true);

  const clickDeleteSeminar = async (seminarId) => {
    try {
      await axios.delete('http://localhost:3000/seminars/' + seminarId)
      setSeminars(seminars.filter((seminar) => seminar.id !== seminarId));
      setSeminarToDelete(null);
    }
    catch (error) {
      console.log(error);
      setSeminarToDelete(null);
    }
  }

  const clickEditSeminar = async (seminar) => {
    const updatedSeminar = { // - совмещаем старые данные с новыми и отправляем на бэк
      ...seminar, // старые данные семинара c id
      ...newSeminar // новые данные семинара, которые изменил пользователь
    };
    try {
      const options = {
        method: 'PATCH',
        url:'http://localhost:3000/seminars/' + seminar.id,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: updatedSeminar
      };
      const response = await axios(options);
      setSeminars(prevSeminars => 
        prevSeminars.map(card => 
          card.id === seminar.id ? { ...card, ...response.data } : card 
        )
      ); //поиск нужного нам семинара по айди и принятие изменений
      setSeminarToEdit(null);
      return response.data;
    }
    catch (error) {
      console.log(error);
      setSeminarToEdit(null);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/seminars')
      .then(response => {
        setSeminars(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      window.addEventListener('load', () => setLoading(false)); // добавляем слушатель события на объект window. При срабатывании выполняется функция и изменеятся состояние загрузки
      return () => window.removeEventListener('load', () => setLoading(false)); // при размантировании компонента убираем слушатель события (в дааном случае не кретично, но хорошая практика) 
  }, []);

  return (
    <div className="flex justify-center items-center bg-slate-200 pt-14 pb-14" style={{minHeight:"100vh"}}>
      {loading && <Loader />}
      <div className="flex gap-10 flex-col justify-center items-center bg-sky-600 p-4 w-4/5 m-auto rounded-xl shadow-xl text-slate-950">
        <h1 className="text-4xl text-slate-100">Seminars</h1>
        {seminars && seminars.length > 0 ? (
          <ul className="flex gap-5 flex-col relative">
            {seminars.map((seminar) => (
              <li key={seminar.id} className="relative">
                {seminarToDelete === seminar.id && (
                  <DeleteSeminar 
                    clickDeleteSeminar={() => clickDeleteSeminar(seminar.id)}
                    clickCancelDeleteSeminar={() => setSeminarToDelete(null)}
                  />
                )}
                {seminarToEdit === seminar.id && (
                  <SeminarEditing 
                    seminar={seminar}
                    newSeminar={newSeminar} 
                    setNewSeminar={setNewSeminar}
                    clickCompleteEditing={() => clickEditSeminar(seminar)}
                    clickCancelEditingSeminar={() => setSeminarToEdit(null)}
                  />
                )}
                <SeminarCard 
                  seminar={seminar}
                  alertDeleteSeminar={() => setSeminarToDelete(seminar.id)}
                  StartSeminarEditing={() => setSeminarToEdit(seminar.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <SeminarsAbsence />
        )}
      </div>
    </div>
  )
}

export default App

