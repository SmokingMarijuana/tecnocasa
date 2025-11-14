import React from "react";
import "./Hero.css"; // Importiamo solo il CSS della hero

const Hero = () => {
  return (
    <section className="hero">
    
      <header id="header">
        <a id="logo" href="#">logo</a>
        <nav>
          <a id="menu-icon">&#8801;</a>
        </nav>
      </header>
      <header className="hero-header">
        <h1 className="hero-title">Trova la casa dei tuoi sogni</h1>
      </header>
      <footer className="hero-footer">
        <a className="button-body button-primary" href="#" style={{ borderRadius: "10px" }}>
          Scopri di più
        </a>
      </footer>
    </section>
  );
};

export default Hero;
