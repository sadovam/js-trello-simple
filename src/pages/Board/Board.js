import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoard, showMessage } from '../../store/actions';
import { Message } from '../../components/Message';
import { List } from './List';
import ListAddForm from './ListAddForm';


const Board = ({match, fetchBoard, message, board}) => {
  const { id } = match.params;
  
  useEffect(() => fetchBoard('board/' + id), [fetchBoard, id]);
  
  return (
    <div>
      {message ? <Message title={message.title} text={message.text} /> : null}
      <h1>{ '<<' + id + '>> Board page' }</h1>
    
      <ul>
        {board.lists ? Object.keys(board.lists).map(uid => (
          <List key={uid} id={uid} boardId={id} title={board.lists[uid].title} position={board.lists[uid].position} cards={board.lists[uid].cards} />
        )) : 'Loading...'} 
      </ul>
      <ListAddForm boardId={id} position={board.lists ? Object.keys(board.lists).length + 1 : 1} />
    </div>
  );
}

const mapDispatchToProps = {
  fetchBoard,
  showMessage,
};
  
  const mapStateToProps = state => ({
    board: state.board.board,
    message: state.home.showMessage,
  });
export default connect (mapStateToProps, mapDispatchToProps)(Board);




// export const Home = ({fetchData, boards, message, showMessage}) => {
    
//   useEffect(() => fetchData('board'), [fetchData]);
//   console.log("MESS>>> ", message)
//   return (
//       <div>
//           {message ? <Message title={message.title} text={message.text} /> : null}
//           {boards ? boards.map(board => <p key={board.id}><Link to={'/board/' + board.id}>{board.title}</Link></p>) : <p>Loading...</p>}
//           <BoardAddForm />
//           <button onClick={() => showMessage('Home', 'Message on click')}>Click me</button>
//       </div>
//   )
// };

// const mapDispatchToProps = {
//   fetchData,
//   showMessage,
// };

// const mapStateToProps = state => ({
//   boards: state.home.data.boards,
//   message: state.home.showMessage,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);