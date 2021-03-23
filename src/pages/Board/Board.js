
export const Board = (props) => {
  const { id } = props.match.params;
  return (
    <>
    <h1>Board page</h1>
    <p>{ id }</p>
    </>
  );
}