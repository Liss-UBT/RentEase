import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SortIcon from "@mui/icons-material/Sort";
import "../styles/SearchPage.css";

const propertiesData = [
  {
    id: 1,
    title: "Banesë moderne në Prishtinë",
    location: "Prishtinë",
    type: "Banesë",
    rentType: "Qira",
    price: 400,
    image: "https://rimh2.domainstatic.com.au/Ru1Hh_qM52dNlfXfE_zU_qWsQ_o=/660x440/filters:format(jpeg):quality(80)/2019194216_1_1_240419_060157-w4000-h2667",
  },
  {
    id: 2,
    title: "Shtëpi e re në Pejë",
    location: "Pejë",
    type: "Shtëpi",
    rentType: "Shitje",
    price: 100000,
    image: "https://media.istockphoto.com/id/177735411/photo/home-for-sale-real-estate-sign-and-house.jpg?s=612x612&w=0&k=20&c=rlxoVGQLRX8PR3UCkUi8Vlw9wCztLoe0C2J7PHOpecQ=",
  },
  {
    id: 3,
    title: "Lokal komercial në Gjakovë",
    location: "Gjakovë",
    type: "Lokal",
    rentType: "Qira",
    price: 700,
    image: "https://crm-cdn.ams3.cdn.digitaloceanspaces.com/anem/storage/anem/2023/June/week4/1024x768/30903_IMG_6876_Optimizer_resize.jpg",
  },
];

const SearchPage = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    rentType: "",
    sort: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProperties = propertiesData
    .filter((p) =>
      (!filters.location || p.location === filters.location) &&
      (!filters.type || p.type === filters.type) &&
      (!filters.rentType || p.rentType === filters.rentType)
    )
    .sort((a, b) => {
      if (filters.sort === "asc") return a.price - b.price;
      if (filters.sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="kerko-container">
      <section className="hero">
        <h1>Kërko pronën</h1>
        <p>Gjej pronën që të përshtatet më së miri.</p>
      </section>

      <div className="filters">
        <div className="select-wrapper">
          <LocationOnIcon className="select-icon" />
          <select name="location" className="form-control with-icon" onChange={handleChange}>
            <option value="">Zgjedh qytetin</option>
            <option value="Prishtinë">Prishtinë</option>
            <option value="Pejë">Pejë</option>
            <option value="Gjakovë">Gjakovë</option>
          </select>
        </div>

        <div className="select-wrapper">
          <HomeIcon className="select-icon" />
          <select name="type" className="form-control with-icon" onChange={handleChange}>
            <option value="">Zgjedh llojin</option>
            <option value="Shtëpi">Shtëpi</option>
            <option value="Banesë">Banesë</option>
            <option value="Lokal">Lokal</option>
          </select>
        </div>

        <div className="select-wrapper">
          <AttachMoneyIcon className="select-icon" />
          <select name="rentType" className="form-control with-icon" onChange={handleChange}>
            <option value="">Zgjedh</option>
            <option value="Qira">Qira</option>
            <option value="Shitje">Shitje</option>
          </select>
        </div>

        <div className="select-wrapper">
          <SortIcon className="select-icon" />
          <select name="sort" className="form-control with-icon" onChange={handleChange}>
            <option value="">Rendit sipas</option>
            <option value="asc">Cmimi: Poshtë-Lartë</option>
            <option value="desc">Cmimi: Lartë-Poshtë</option>
          </select>
        </div>
      </div>

      <div className="results">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((prop) => (
            <Link to={`/property/${prop.id}`} key={prop.id} className="property-card">
              <h3>{prop.title}</h3>
              <p>{prop.location} - {prop.type} - {prop.rentType}</p>
              <strong>€ {prop.price.toLocaleString()}</strong>
            </Link>
          ))
        ) : (
          <p>Nuk u gjet asnjë pronë për këtë filtër.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
