import React from 'react';
import '../styles/AboutUs.css'; 
import AboutUsImage from '../Assets/aboutUs.jpg';
import Agent1Image from '../Assets/agent1.jpeg';
import Agent2Image from '../Assets/agent2.jpg';
import Agent3Image from '../Assets/agent3.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">  
      <h1>Rreth Nesh</h1>
      <img src={AboutUsImage} alt="Zyra jonë" className="about-image" />
      <p>
        Mirë se vini në Rent Ease – partneri juaj i besuar për të gjetur shtëpinë ideale me qira.
        Ne qoftë se jeni në kërkim të një apartamenti të ngrohtë në qytet apo një shtëpie të bollshme në periferi,
        ne jemi këtu për ju.
      </p>

      <h2>Misioni Ynë</h2>
      <p>
        Te Rent Ease, misioni ynë është ta bëjmë procesin e marrjes me qira të thjeshtë, transparent dhe pa stres.
        Bashkëpunojmë ngushtë me qiramarrësit dhe pronarët për të krijuar një përvojë të qetë dhe të sigurt.
      </p>

      <h2>Pse të Zgjidhni Ne?</h2>
      <ul>``
        <li>Gama e gjerë e pronave të verifikuara për qira</li>
        <li>Mbështetje e përkushtuar për klientët</li>
        <li>Aplikim dhe pagesë e lehtë online</li>
        <li>Politika transparente dhe pa tarifa të fshehura</li>
      </ul>

      <h2>Stafi Ynë</h2>
      <div className="staff-section">
        <div className="staff-card">
          <img src={Agent1Image} alt="Arbër Gashi" className="staff-image" />
          <h3>Elira Gashi</h3>
          <p>Email: elira@rentease.com</p>
          <p>Tel: +383 44 111 222</p>
        </div>
        <div className="staff-card">
          <img src={Agent2Image} alt="Elira Dema" className="staff-image" />
          <h3>Arber Dema</h3>
          <p>Email: arber@rentease.com</p>
          <p>Tel: +383 44 333 444</p>
        </div>
        <div className="staff-card">
          <img src={Agent3Image} alt="Ana Gashi" className="staff-image" />
          <h3>Ana Gashi</h3>
          <p>Email: ana@rentease.com</p>
          <p>Tel: +383 44 333 444</p>
        </div>
      </div>

      <h2>Na Kontaktoni</h2>
      <p>Email: support@rentease.com</p>
      <p>Telefon: +383 44 123 345 </p>
      <p>Zyra: Rr. Kryesore 123, Prishtine</p>
    </div>
  );
};

export default AboutUs;
