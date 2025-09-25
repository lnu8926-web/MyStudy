export default function GridEx() {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container">
      {item.map((num) => {
        return <div key={num}>아이템{num} </div>;
      })}
    </div>
  );
}
