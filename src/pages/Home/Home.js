import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../store/actions';

export const Home = ({fetchData, boards}) => {
    
    useEffect(() => fetchData('board'), [fetchData]);
    
    return (
        <div>
            <button onClick={() => fetchData('board')}>Click me</button>
            {boards ? boards.map(board => <p key={board.id}>{board.title}</p>) : <p>Loading...</p>}
        </div>
    )
};

const mapDispatchToProps = {
    fetchData,
};

const mapStateToProps = state => ({
    boards: state.home.data.boards,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);