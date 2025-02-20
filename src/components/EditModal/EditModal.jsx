import PropTypes from "prop-types";
import styles from "./EditModal.module.css";
// Редактирование семинара
const EditModal = ({
  isModalOpen,
  handleCloseModal,
  handleSave,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  editDate,
  setEditDate,
  editLocation,
  setEditLocation,
  editTime,
  setEditTime,
}) => {
  return (
    isModalOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={handleCloseModal}>
            &times;
          </span>
          <h2 className={styles.title}>Редактирование</h2>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Заголовок"
            className={styles.input}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Описание"
            className={styles.input}
          />
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            placeholder="Местоположение"
            className={styles.input}
          />
          <input
            type="time"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.saveButton} onClick={handleSave}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    )
  );
};

EditModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  editTitle: PropTypes.string.isRequired,
  setEditTitle: PropTypes.func.isRequired,
  editDescription: PropTypes.string.isRequired,
  setEditDescription: PropTypes.func.isRequired,
  editDate: PropTypes.string.isRequired,
  setEditDate: PropTypes.func.isRequired,
  editLocation: PropTypes.string.isRequired,
  setEditLocation: PropTypes.func.isRequired,
  editTime: PropTypes.string.isRequired,
  setEditTime: PropTypes.func.isRequired,
};

export default EditModal;
