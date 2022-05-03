import React from "react";
import { categoryList, companyList } from "../../data";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Sidebar = () => {
  return (
    <section className="sidebar_section">
      <aside className="aside">
       <div className="aside_search">
            <Input type="text" placeholder="Search..." />
       </div>
        <form >
          <ul className="sidebar_category">
            <span className="sidebar_title">Category</span>
            {categoryList.map((cat) => (
              <li key={cat.id}>{cat.name}</li>
            ))}
          </ul>
          {/* <select className="sidebar_company">
            <span className="sidebar_title">Company</span>
            {companyList.map((comp) => (
              <option key={comp.value} value={comp.value}>{comp.name}</option>
            ))}
          </select> */}
          <ul className="sidebar_color">
            <span className="sidebar_title">Colors</span>
          </ul>
          <ul className="sidebar_price">
            <span className="sidebar_title">Price</span>
            <Input type="range" className="sidebar_range" />
          </ul>
          <ul className="sidebar_free_shipping">
            <span className="sidebar_title">Free Shipping</span>
            <Input type="checkbox" className="sidebar_range" />
          </ul>
          <div className="mt-4">
          <Button className="btn-danger">Clear filter</Button>
          </div>
        </form>

      </aside>
    </section>
  );
};

export default Sidebar;
