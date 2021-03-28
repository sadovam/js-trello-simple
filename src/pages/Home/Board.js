import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { deleteBoard } from "../../store/actions"

const Board = (props) => {
  return (
    <>
    <Link to={'/board/' + props.id}>{props.title}</Link>
    <button onClick={ () => props.deleteBoard('board/' + props.id) }>X</button> 
    </>
  )
}

const mapDispatchToProps = {
  deleteBoard,
}

export default connect(null, mapDispatchToProps)(Board);