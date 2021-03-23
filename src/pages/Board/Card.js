import { connect } from "react-redux";
import { deleteData } from "../../store/actions";

const Card = ({ title, position, id, boardId, deleteData }) => (
  <li>
    { title + ' pos: ' + position }
    <button onClick={ () => { deleteData('board/' + boardId + '/card/' + id, boardId)} }>Delete</button>
  </li>
);

const mapDispatchToProps = {
  deleteData,
}

export default connect(null, mapDispatchToProps)(Card);