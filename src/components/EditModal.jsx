import PropTypes from "prop-types";

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
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <h2>Редактирование</h2>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Заголовок"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Описание"
          />
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
          <input
            type="text"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            placeholder="Местоположение"
          />
          <input
            type="time"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
          />
          <div className="button-container">
            <button className="btn-save" onClick={handleSave}>
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
