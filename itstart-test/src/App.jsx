import axios from "axios";
import { useEffect, useState } from "react";
import SeminarCard from "./componets/SeminarCard";
import DeleteSeminar from "./componets/DeleteSeminar";

function App() {
  const [seminars, setSeminars] = useState(null);
  const [seminarToDelete, setSeminarToDelete] = useState(false);

  const clickDeleteSeminar = async (seminarId) => {
    try {
      await axios.delete('http://localhost:3000/seminars/' + seminarId)
      setSeminarToDelete(false);
    }
    catch (error) {
      console.log(error);
      setSeminarToDelete(false);
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
  }, [seminars]);

  return (
    <div className="flex justify-center items-center bg-slate-200 pt-14 pb-14">
      <div className="flex gap-10 flex-col justify-center items-center bg-sky-600 p-4 w-4/5 m-auto rounded-xl shadow-xl text-slate-950">
        <h1 className="text-4xl text-slate-100">Seminars</h1>
        <ul className="flex gap-5 flex-col relative">
          {seminars && seminars.map((seminar) => (
            <li key={seminar.id} className="relative">
              {seminarToDelete && (
                <DeleteSeminar 
                  clickDeleteSeminar={() => clickDeleteSeminar(seminar.id)}
                  clickCancelDeleteSeminar={() => setSeminarToDelete(false)}
                />
              )}
              <SeminarCard 
                seminar={seminar}
                alertDeleteSeminar={() => setSeminarToDelete(true)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

