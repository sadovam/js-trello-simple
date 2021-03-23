import { connect } from "react-redux";
import { changeInputValue, fetchPostBoard, showMessage } from "../../store/actions";

const ListAddForm = props => {
  
  return(
    <form onSubmit={
      event => {
        event.preventDefault();
        props.fetchPostBoard(props.boardId, 'board/' + props.boardId + '/list', {title: props.newTitle, position: props.position});
        props.changeInputValue('');
      }
    }>
      <label htmlFor='title'>Введіть назву нового списку</label>
      <input name='title' id='title' 
        placeholder='Назва списку' value={props.newTitle} 
        onChange={event => props.changeInputValue(event.target.value)}/>
      <input type='submit'/>
    </form>
  )
};

const mapStateToProps = state => ({
  newTitle: state.home.newBoardTitle,
  postResult: state.home.postResult,
});

const mapDispatchToProps = {
  changeInputValue,
  fetchPostBoard,
  showMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAddForm);