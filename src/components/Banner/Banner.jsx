import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Row from "../Row/Row";
import heroBg from "../../assets/images/hero-bcg.jpeg"
import heroBg2 from "../../assets/images/hero-bcg-2.jpeg"

const Banner = () => {
  return (
    <section className="banner_section">
      <Container>
        <div className="banner_content">
          <Row>
            <div className="col-6 align-center flex justify-center">
              <div className="banner_left">
                <h1>Design Your Comfort Zone</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto, at sed omnis corporis doloremque possimus velit!
                  Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero
                  et quia tempora excepturi quis alias?
                </p>
                <Button className="btn btn-primary">SHOP NOW</Button>
              </div>
            </div>
            <div className="col-6">
              <div className="banner_right">
                  <img className="bg_main" src={heroBg} alt="" />
                  <img className="bg_secondary" src={heroBg2} alt="" />
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
