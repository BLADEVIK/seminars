import styles from "./App.module.css";
import { useEffect, useState } from "react";
import SeminarList from "./components/SeminarList/SeminarList";
import EditModal from "./components/EditModal/EditModal";
import {
  fetchSeminars,
  deleteSeminar as apiDeleteSeminar,
  updateSeminar as apiUpdateSeminar,
} from "./api/seminarApi";
// Главный компонент
function App() {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [currentSeminarId, setCurrentSeminarId] = useState(null);
  const [editTime, setEditTime] = useState("");
  // Загрузка семинаров
  useEffect(() => {
    // Запрос данных с семинарами из json-server
    fetchSeminars()
      .then((data) => {
        setSeminars(data);
        setLoading(false);
      })
      .catch((error) => console.error("Ошибка при загрузке семинаров:", error));
  }, []);
  // Удаление семинара
  const deleteSeminar = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить семинар?")) {
      apiDeleteSeminar(id)
        .then(() => {
          setSeminars(seminars.filter((seminar) => seminar.id !== id));
        })
        .catch((error) => console.error("Ошибка:", error));
    }
  };
  // Редактирование семинара
  const handleEditClick = (seminar) => {
    setCurrentSeminarId(seminar.id);
    setEditTitle(seminar.title);
    setEditDescription(seminar.description);
    setEditDate(seminar.date);
    setEditLocation(seminar.location);
    setEditTime(seminar.time);
    setModalOpen(true);
  };
  // Закрытие модального окна
  const handleCloseModal = () => {
    setModalOpen(false);
    setEditTitle("");
    setEditDescription("");
    setEditDate("");
    setEditLocation("");
    setCurrentSeminarId(null);
  };

  // Сохранение семинара
  const handleSave = () => {
    apiUpdateSeminar(currentSeminarId, {
      title: editTitle,
      description: editDescription,
      date: editDate,
      location: editLocation,
      time: editTime,
    })
      .then(() => {
        setSeminars(
          seminars.map((seminar) =>
            seminar.id === currentSeminarId
              ? {
                  ...seminar,
                  title: editTitle,
                  description: editDescription,
                  date: editDate,
                  location: editLocation,
                  time: editTime,
                }
              : seminar
          )
        );
        handleCloseModal();
      })
      .catch((error) => console.error("Ошибка при сохранении:", error));
  };
  // Рендеринг главной страницы
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Семинары</h1>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <SeminarList
          seminars={seminars}
          deleteSeminar={deleteSeminar}
          handleEditClick={handleEditClick}
        />
      )}
      <EditModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSave={handleSave}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        editDate={editDate}
        setEditDate={setEditDate}
        editLocation={editLocation}
        setEditLocation={setEditLocation}
        editTime={editTime}
        setEditTime={setEditTime}
      />
    </div>
  );
}

export default App;
