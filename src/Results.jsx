import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets Found!</h1>
      ) : (
        <>
          {pets.map((pet) => (
            <Pet key={pet.id} {...pet} />
          ))}
        </>
      )}
    </div>
  );
};

export default Results;
