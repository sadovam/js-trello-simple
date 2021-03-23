import { connect } from "react-redux";
import { deleteData } from "../../store/actions";
import Card from "./Card";
import CardAddForm from "./CardAddForm";

const List = ({ id, title, position, cards, boardId, deleteData }) => {
  return (
    <li>
      { id + ' > ' + title + ' pos: ' + position }
      {Object.keys(cards).length > 0 ? <ul>
        {
        Object.keys(cards).map(id => (
          <Card key={id} id={id} boardId={boardId} title={cards[id].title} position={cards[id].position} />
        )) 
        }
        </ul> : <p>'No cards yet...'</p> 
      }
      <CardAddForm listId={id} boardId={boardId} position={cards ? Object.keys(cards).length + 1 : 1}/>
      <button onClick={ () => { deleteData('board/' + boardId + '/list/' + id, boardId)} }>Delete list</button>
    </li>
  );
};

const mapDispatchToProps = {
  deleteData,
}

export default connect(null, mapDispatchToProps)(List);