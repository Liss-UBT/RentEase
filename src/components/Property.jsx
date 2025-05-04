import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Property.css";

const propertiesData = [
  {
    id: 1,
    title: "Banesë moderne në Prishtinë",
    location: "Prishtinë",
    type: "Banesë",
    rentType: "Qira",
    price: 400,
    image: "https://rimh2.domainstatic.com.au/Ru1Hh_qM52dNlfXfE_zU_qWsQ_o=/660x440/filters:format(jpeg):quality(80)/2019194216_1_1_240419_060157-w4000-h2667",
    description: "Një banesë moderne në zemër të Prishtinës.",
  },
  {
    id: 2,
    title: "Shtëpi e re në Pejë",
    location: "Pejë",
    type: "Shtëpi",
    rentType: "Shitje",
    price: 100000,
    image: "https://media.istockphoto.com/id/177735411/photo/home-for-sale-real-estate-sign-and-house.jpg?s=612x612&w=0&k=20&c=rlxoVGQLRX8PR3UCkUi8Vlw9wCztLoe0C2J7PHOpecQ=",
    description: "Shtëpi e bukur në një lagje të qetë.",
  },
  {
    id: 3,
    title: "Lokal komercial në Gjakovë",
    location: "Gjakovë",
    type: "Lokal",
    rentType: "Qira",
    price: 700,
    image: "https://crm-cdn.ams3.cdn.digitaloceanspaces.com/anem/storage/anem/2023/June/week4/1024x768/30903_IMG_6876_Optimizer_resize.jpg",
    description: "I përshtatshëm për biznese të vogla.",
  },
];

const Property = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id === parseInt(id));

  if (!property) return <p>Prona nuk u gjet.</p>;

  return (
    <div className="property-details-container">
  <img
    src={property.image}
    alt={property.title}
    className="property-image"
  />
  <div className="property-info">
    <h2 className="property-title">{property.title}</h2>
    <div className="property-detail-row">
      <span className="property-detail-label">Vendndodhja:</span>
      <span>{property.location}</span>
    </div>
    <div className="property-detail-row">
      <span className="property-detail-label">Lloji:</span>
      <span>{property.type}</span>
    </div>
    <div className="property-detail-row">
      <span className="property-detail-label">Lloji i marrjes:</span>
      <span>{property.rentType}</span>
    </div>
    <div className="property-detail-row">
      <span className="property-detail-label">Çmimi:</span>
      <span>€ {property.price.toLocaleString()}</span>
    </div>
    <p className="property-description">{property.description}</p>
  </div>
</div>
  );
  
};

export default Property;
