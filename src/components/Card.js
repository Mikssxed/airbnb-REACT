import React from "react";
import star from "./img/star.png";

function Card({object}) {
  return (
    <div className="card">
      <img className="cardImg" src={`./img/${object.coverImg}`} alt="person" />
      <div className="rating">
        <img src={star} alt="star" />
        <span className="rate">{object.stats.rating}</span>
        <span className="grey">{object.stats.reviewCount} • {object.location}</span>
      </div>
      <p className="description">{object.title}</p>
      <div className="pricing">
        <span className="bolded">From ${object.price}</span> / person
      </div>
      <div className="status">{object.openSpots > 0 ? "ONLINE" : "SOLD OUT"}</div>
    </div>
  );
}

export default function Cards({data}) {
    const cards = data.map((item) => <Card key={item.id} object={item} />)
  return (
    <div className="cardContainer">
      {cards}
    </div>
  );
}
