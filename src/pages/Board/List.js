import { Card } from "./Card";

export const List = ({ title, position, cards }) => {
  return (
    <li>
      { title + ' pos: ' + position }
      {Object.keys(cards).length > 0 ? <ul>
        {
        Object.keys(cards).map(id => (
          <Card key={id} title={cards[id].title} position={cards[id].position} />
        )) 
        }
        </ul> : 'No cards yet...' 
      }
    </li>
  );
};
