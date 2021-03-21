import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../../store/actions';
export const Home = ({fetchBoards, boards}) => {
    
    useEffect(fetchBoards, [fetchBoards]);
    
    return (
        <div>
            <button onClick={() => fetchBoards()}>Click me</button>
            {boards ? boards.map(board => <p key={board.id}>{board.title}</p>) : <p>Loading...</p>}
        </div>
    )
};

const mapDispatchToProps = {
    fetchBoards,
};

const mapStateToProps = state => ({
    boards: state.home.boards,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);