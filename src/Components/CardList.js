import CardItem from "./Card";

const CardList = ({ data }) => {
  const handleName = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <div className='card-list'>
      {data.map((item) => {
        return <CardItem key={item.id} item={item} handleName={handleName} />;
      })}
    </div>
  );
};

export default CardList;
