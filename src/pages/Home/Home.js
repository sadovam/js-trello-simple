import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, showMessage } from '../../store/actions';
import BoardAddForm from './BoardAddForm';
import { Message } from '../../components/Message';
import { Link } from 'react-router-dom';

export const Home = ({fetchData, boards, message, showMessage}) => {
    
    useEffect(() => fetchData('board'), [fetchData]);
    // console.log("MESS>>> ", message)
    return (
        <div>
            {message ? <Message title={message.title} text={message.text} /> : null}
            {boards ? boards.map(board => <p key={board.id}><Link to={'/board/' + board.id}>{board.title}</Link></p>) : <p>Loading...</p>}
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