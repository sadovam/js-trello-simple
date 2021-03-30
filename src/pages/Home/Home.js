import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, showMessage, showModal } from '../../store/actions';
import BoardAddForm from './BoardAddForm';
import Board from './Board';

import cs from './Home.module.css';

export const Home = ({fetchData, boards, showMessage, showModal}) => {
    
  useEffect(() => fetchData('board'), [fetchData]);

  return (
    <div>
      <h1 className={ cs.title }>Мої дошки</h1>
      <div className={ cs.boards }>
        {boards ? boards.map(board => <Board key={board.id} id={board.id} title={board.title}/>) : <p>Loading...</p>}
        <button className={ cs.addBtn } onClick={() => showModal(<BoardAddForm/>)}>Додати дошку</button>
      </div>
      
    </div>
  )
};

const mapDispatchToProps = {
    fetchData,
    showMessage,
    showModal,
};

const mapStateToProps = state => ({
    boards: state.home.data.boards,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);