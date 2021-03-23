import { connect } from "react-redux";
import { changeInputValue, fetchPostBoard, showMessage } from "../../store/actions";

const CardAddForm = props => {
  
  return(
    <form onSubmit={
      event => {
        event.preventDefault();
        props.fetchPostBoard(props.boardId, 'board/' + props.boardId + '/card', 
          {title: props.newTitle, position: props.position, list_id: props.listId});
        props.changeInputValue('');
      }
    }>
      <label htmlFor='title'>Введіть назву нової картки</label>
      <input name='title' id='title' 
        placeholder='Назва картки' value={props.newTitle} 
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

export default connect(mapStateToProps, mapDispatchToProps)(CardAddForm);