import React from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import Row from "../Row/Row";

const Subscription = () => {
  return (
    <section className="subscription_section">
      <Container>
        <Row>
          <div className="col-6">
            <div className="subs_left">
              <h1>Join our newsletter and get 20% off</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </p>
            </div>
          </div>
          <div className="col-6">
              <div className="subs_right">
                  <h3>Subscription</h3>
                  <Input type="email" placeholder="E-mail" className="subs_input"/>
              </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Subscription;
