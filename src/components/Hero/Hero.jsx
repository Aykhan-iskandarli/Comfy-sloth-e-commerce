import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Hero = ({ children, className }) => {
  return (
    <div className={`hero ${className}`}>
      <Container>
        <div className="hero-content">
          <Link to="/">Home</Link>
          <span className="pathname"> {children}</span>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
