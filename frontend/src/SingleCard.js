import { useState } from "react";
import "./SingleCard.css";

export default function SingleCard({ id, title, thumbnail, card }) {
  const [state, setcurrentState] = useState(false);

  const openModal = () => {
    setcurrentState(true);
  };

  const closeModal = () => {
    setcurrentState(false);
  };

  return (
    <div>
      <div className="card">
        <div className="container" onClick={openModal}>
          <img
            src={thumbnail.small}
            alt="Avatar"
            className="image"
            style={{ width: "100%" }}
          ></img>
          <div className="middle">
            <div className="text">Learn More</div>
          </div>
        </div>
        <h1 onClick={openModal}>{title}</h1> {/* Added onClick event */}
        <div className="container">
          <p>{card.content}</p>
        </div>
      </div>
      {state && (
        <div className="Modal">
          <p className="close" onClick={closeModal}>
            X
          </p>
          <div className="inner">
            <div>
              <img
                src={thumbnail.large}
                alt="Avatar"
              ></img>
            </div>
            <h1>{title}</h1>
            <div>
              <p>{card.content}</p>
            </div>
            <div className="foot">
              <img
                src={card.author.avatar}
                alt="Author's Avatar"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px"
                }}
              />
              <p>
                {card.author.name} - {card.author.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
