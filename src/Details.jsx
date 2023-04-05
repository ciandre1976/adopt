import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h3 className="loader" style={{ color: "blue" }}>
          loading...
        </h3>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div className="carousel">
        <img
          style={{ width: "45%", borderRadius: "5px" }}
          src={pet.images[1] ?? "http://pets-images.dev-apis.com/pets/none.jpg"}
          alt={pet.name}
        />
      </div>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.city},{pet.state}
          {pet.description}
          {showModal ? (
            <Modal>
              <h1>Would you like to Adopt {pet.name}?</h1>
              <div className="buttons">
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </Modal>
          ) : null}
        </h2>
        <button onClick={() => setShowModal(true)}>Adoppt {pet.name}</button>
      </div>
    </div>
  );
};

export default Details;
