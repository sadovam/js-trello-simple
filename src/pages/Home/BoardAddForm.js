import { connect } from "react-redux";
import { changeInputValue, fetchPostData, fetchData, showMessage } from "../../store/actions";

const BoardAddForm = props => {
  
  return(
    <form onSubmit={
      event => {
        event.preventDefault();
        props.fetchPostData('board', {title: props.newTitle});
        props.changeInputValue('');
      }
    }>
      <label htmlFor='title'>Введіть назву нової дошки</label>
      <input name='title' id='title' 
        placeholder='Назва дошки' value={props.newTitle} 
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
  fetchPostData,
  fetchData,
  showMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardAddForm);