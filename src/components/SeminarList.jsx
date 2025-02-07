import PropTypes from "prop-types";
import SeminarItem from "./SeminarItem";

const SeminarList = ({ seminars, deleteSeminar, handleEditClick }) => {
  return (
    <ul>
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
