import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { deleteBoard } from "../../store/actions"

import cs from './Board.module.css';

const Board = (props) => {
  return (
    <div className={ cs.board }>
    <Link className={ cs.link } to={'/board/' + props.id}>{props.title}</Link>
    <button className={ cs.btn } onClick={ () => props.deleteBoard('board/' + props.id) }>Видалити</button> 
    </div>
  )
}

const mapDispatchToProps = {
  deleteBoard,
}

export default connect(null, mapDispatchToProps)(Board);