import React, { useEffect } from "react";
import { featured } from "../../data";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";

const Featured = () => {
    const {featured_products} = useSelector(state=>state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
  return (
    <section className="featured_section">
      <Container>
        <Row>
            <Card featured={featured_products}/>
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
