import PropTypes from "prop-types";
import SeminarItem from "../SeminarItem/SeminarItem";
import styles from "./SeminarList.module.css";
// Список семинаров
const SeminarList = ({ seminars, deleteSeminar, handleEditClick }) => {
  return (
    <ul className={styles.seminarList}>
      {seminars.map((seminar) => (
        <SeminarItem
          key={seminar.id}
          seminar={seminar}
          deleteSeminar={deleteSeminar}
          handleEditClick={handleEditClick}
        />
      ))}
    </ul>
  );
};

SeminarList.propTypes = {
  seminars: PropTypes.array.isRequired,
  deleteSeminar: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default SeminarList;
