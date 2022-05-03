import React from "react";
import Container from "../Container/Container";
import Row from "../Row/Row";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="col-12">
          <div className="footer-content">
          <p>© 2022 ComfySloth All rights reserved</p>
          </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
