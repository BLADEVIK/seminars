import PropTypes from "prop-types";
import styles from "./SeminarItem.module.css";

// Семинар
const SeminarItem = ({ seminar, deleteSeminar, handleEditClick }) => {
  return (
    <li className={styles.seminarItem}>
      <div>
        <h2>{seminar.title}</h2>
        {seminar.description && <p>Описание : {seminar.description}</p>}
        {seminar.date && <p>Дата : {seminar.date}</p>}
        {seminar.location && <p>Местоположение : {seminar.location}</p>}
        {seminar.time && <p>Время : {seminar.time}</p>}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => deleteSeminar(seminar.id)}
        >
          Удалить
        </button>
        <button
          className={styles.editButton}
          onClick={() => handleEditClick(seminar)}
        >
          Редактировать
        </button>
      </div>
    </li>
  );
};

SeminarItem.propTypes = {
  seminar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  deleteSeminar: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default SeminarItem;
