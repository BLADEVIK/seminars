import PropTypes from "prop-types";

import {
  SeminarCard,
  Title,
  InfoText,
  ButtonContainer,
  EditButton,
  DeleteButton,
} from "../SeminarItem/SeminarItem.styled";

// Семинар
const SeminarItem = ({ seminar, deleteSeminar, handleEditClick, }) => {
  return (
    <SeminarCard>
      <div>
        <Title>{seminar.title}</Title>
        {seminar.description && (
          <InfoText>Описание: {seminar.description}</InfoText>
        )}
        {seminar.date && <InfoText>Дата: {seminar.date}</InfoText>}
        {seminar.location && (
          <InfoText>Местоположение: {seminar.location}</InfoText>
        )}
        {seminar.time && <InfoText>Время: {seminar.time}</InfoText>}
      </div>
      <ButtonContainer>
        <DeleteButton onClick={() => deleteSeminar(seminar.id)}>
          Удалить
        </DeleteButton>
        <EditButton onClick={() => handleEditClick(seminar)}>
          Редактировать
        </EditButton>
      </ButtonContainer>
    </SeminarCard>
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
