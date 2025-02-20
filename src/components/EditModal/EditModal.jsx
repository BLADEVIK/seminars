import PropTypes from "prop-types";
import {
  ButtonContainer,
  CloseButton,
  Input,
  ModalContent,
  ModalOverlay,
  SaveButton,
  TextArea,
  Title,
} from "./EditModal.styled";
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
      <ModalOverlay>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          <Title>Редактирование семинара</Title>
          <Input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Заголовок"
          />
          <TextArea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Описание"
          />
          <Input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />
          <Input
            type="text"
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)}
            placeholder="Местоположение"
          />
          <Input
            type="time"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
          />
          <ButtonContainer>
            <SaveButton onClick={handleSave}>Сохранить</SaveButton>
          </ButtonContainer>
        </ModalContent>
      </ModalOverlay>
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
