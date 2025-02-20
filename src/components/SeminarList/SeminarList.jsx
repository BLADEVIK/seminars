import PropTypes from "prop-types";
import SeminarItem from "../SeminarItem/SeminarItem";
import { SeminarListContainer } from "../SeminarList/SeminarList.styled";



// Список семинаров
const SeminarList = ({ seminars, deleteSeminar, handleEditClick }) => {
  return (
    <SeminarListContainer>
      {seminars.map((seminar) => (
        <SeminarItem
          key={seminar.id}
          seminar={seminar}
          deleteSeminar={deleteSeminar}
          handleEditClick={handleEditClick}
        />
      ))}
    </SeminarListContainer>
  );
};

SeminarList.propTypes = {
  seminars: PropTypes.array.isRequired,
  deleteSeminar: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default SeminarList;
