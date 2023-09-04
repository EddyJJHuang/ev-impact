// App.js
import React from 'react';
import './App.css';
import CarModel from './CarModel';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Model />
      <BenefitsSection />
      <HarmfulEffectsSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Electric Vehicles: Impact on Environment & Politics</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#interactive-demo">EV Model</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#harmful-effects">Harmful Effects</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 EV Impact. All rights reserved.</p>
    </footer>
  );
}

function HomePage() {
  return (
    <section id="home">
      <h2>Welcome to EV Impact</h2>
      <p>Introduction to EVs and their significance...</p>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits">
      <h2>Benefits of Electric Vehicles</h2>
      <p>Detailed information on environmental and political benefits...</p>
    </section>
  );
}

function HarmfulEffectsSection() {
  return (
    <section id="harmful-effects">
      <h2>Harmful Effects of Electric Vehicles</h2>
      <p>Information on the negative impacts...</p>
    </section>
  );
}

function Model() {
  return (
    <section id="interactive-demo">
      <h2>EV Model</h2>
      <CarModel />
    </section>
  );
}


export default App;
