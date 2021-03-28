import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, showMessage } from '../../store/actions';
import BoardAddForm from './BoardAddForm';
import { Message } from '../../components/Message';
import Board from './Board';

export const Home = ({fetchData, boards, message, showMessage}) => {
    
    useEffect(() => fetchData('board'), [fetchData]);
    // console.log("MESS>>> ", message)
    return (
        <div>
            {message ? <Message title={message.title} text={message.text} /> : null}
            {boards ? boards.map(board => <Board key={board.id} id={board.id} title={board.title}/>) : <p>Loading...</p>}
            <BoardAddForm />
            <button onClick={() => showMessage('Home', 'Message on click')}>Click me</button>
        </div>
    )
};

const mapDispatchToProps = {
    fetchData,
    showMessage,
};

const mapStateToProps = state => ({
    boards: state.home.data.boards,
    message: state.home.showMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);