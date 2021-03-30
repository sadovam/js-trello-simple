import { connect } from "react-redux";
import { deleteData } from "../../store/actions";
import cs from './Card.module.css';

const Card = ({ title, position, id, boardId, deleteData }) => (
  <li className={cs.card}>
    { title + ' pos: ' + position }
    <button className={cs.btn} onClick={ () => { deleteData('board/' + boardId + '/card/' + id, boardId)} }>x</button>
  </li>
);

const mapDispatchToProps = {
  deleteData,
}

export default connect(null, mapDispatchToProps)(Card);