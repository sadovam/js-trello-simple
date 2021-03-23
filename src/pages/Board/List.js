import { Card } from "./Card";
import CardAddForm from "./CardAddForm";

export const List = ({ id, title, position, cards, boardId }) => {
  return (
    <li>
      { id + ' > ' + title + ' pos: ' + position }
      {Object.keys(cards).length > 0 ? <ul>
        {
        Object.keys(cards).map(id => (
          <Card key={id} title={cards[id].title} position={cards[id].position} />
        )) 
        }
        </ul> : <p>'No cards yet...'</p> 
      }
      <CardAddForm listId={id} boardId={boardId} position={cards ? Object.keys(cards).length + 1 : 1}/>
    </li>
  );
};
