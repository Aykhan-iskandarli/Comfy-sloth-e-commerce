import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container/Container";
import Hero from "../components/Hero/Hero";
import Row from "../components/Row/Row";
import Sidebar from "../components/Sidebar/Sidebar";
import { BsGrid, BsList } from "react-icons/bs";
import Button from "../components/Button/Button";
import { productList } from "../data";
import Card from "../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSort } from "../redux/actions/products";
import Loading from "../components/Loading/Loading";
// import axios from "axios";


const Products = () => {
    const dispatch = useDispatch();
    const {filter_products,sort} = useSelector(state=>state.filter)

  const location = useLocation();

  const updateSort = (e)=>{
    const {value} = e.target
    dispatch(productSort(value))
  }

  useEffect(()=>{
    dispatch(getProducts())
},[dispatch])
  return (
    <div className="products_section">
      <Hero>
        {"/ "}
        {location.pathname.slice(1)}
      </Hero>
      <div className="mt-4 mb-4">
        <Container>
          <Row>
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col-10">
              <div className="products_list">
                <div className="porduct_list_top">
                  <div className="products_grid">
                    <Button className="btn">
                      <BsGrid />
                    </Button>
                    <Button className="btn">
                      <BsList />
                    </Button>
                    <div className="products_grid_length">
                      <p>7 Products Found</p>
                    </div>
                  </div>
                  <div className="products_divider"></div>
                  <div className="product_sort_price">
                    <p>Sort By</p>
                    <select name="sort" id="sort" onChange={updateSort} value={sort}>
                      <option value="price-lowest">Price (Lowest)</option>
                      <option value="price-higest">Price (Higest)</option>
                      <option value="name-a">Name (A - Z)</option>
                      <option value="name-z">Name (Z-A)</option>
                    </select>
                  </div>
                </div>
                <ul className="products_content">
                  {
                      filter_products?  <Card data={filter_products}/>: <Loading/>
                  }
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
