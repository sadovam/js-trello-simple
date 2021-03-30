import { connect } from "react-redux";
import { changeInputValue, fetchPostData, showMessage, hideModal } from "../../store/actions";
import cs from './BoardAddForm.module.css';

const BoardAddForm = props => {
  
  function submit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-useless-escape
    if (props.newTitle.trim().match(/^[\d\p{L} \.,_-]+$/u) === null) {
      props.showMessage('Помилка', 'Назва дошки неправильна.');
      return;
    }
    props.fetchPostData('board', {title: props.newTitle.trim()});
    props.changeInputValue('');
    props.hideModal();
  }

  return(
    <form className={cs.form}
      onSubmit={event => submit(event)} 
      onClick = {event => event.stopPropagation()}
    >
      <label htmlFor='title'>Введіть назву нової дошки</label>
      <input name='title' id='title' className={cs.input}
        placeholder='Назва дошки' value={props.newTitle} 
        onChange={event => props.changeInputValue(event.target.value)}/>
      <input type='submit'style={{visibility: 'hidden'}}/>
      <button onClick={event => submit(event)}>Створити</button>
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
  showMessage,
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardAddForm);