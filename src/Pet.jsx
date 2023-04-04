import { Link } from "react-router-dom";
const Pet = ({ name, animal, breed, id, images, city, state }) => {
  const loction = `${city},${state}`;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {loction}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
