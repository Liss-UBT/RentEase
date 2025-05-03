import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-form">
        <div className="form-group">
          <label className="form-label">Location</label>
          <div className="form-control-wrapper">
            <span className="form-group-icon">
              <LocationOnIcon />
            </span>
            <select className="form-control">
              <option value="">Select location</option>
              <option value="Prishtina">Prishtina</option>
              <option value="Prizren">Prizren</option>
              <option value="Peja">Peja</option>
              <option value="Ferizaj">Ferizaj</option>
              <option value="Fushë Kosova">Fushë Kosova</option>
              
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Property Type</label>
          <div className="form-control-wrapper">
            <span className="form-group-icon">
              <HomeIcon />
            </span>
            <select className="form-control">
              <option value="">Select property type</option>
              <option value="houShtëpise">Shtëpi</option>
              <option value="Banesë">Banesë</option>
              <option value="Lokal">Lokal</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Price Range</label>
          <div className="form-control-wrapper">
            <span className="form-group-icon">
              <AttachMoneyIcon />
            </span>
            <select className="form-control">
              <option value="">Select price range</option>
              <option value="6000-12000">200€ - 500€ /muaj</option>
              <option value="12000-18000">500€ - 700€ /muaj</option>
              <option value="18000-plus">700€+ /muaj</option>
            </select>
          </div>
        </div>

        <button type="button" className="search-button">
          <SearchIcon className="search-icon" />
          <span>SEARCH</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 