import React, { Component } from "react";
// import howitworks from "../images/howitworks-search.svg";
import main_logo from "../images/main_logo.png";
import daily from "../images/daily.png";
import weekly from "../images/weekly.png";
import "./css/display.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="SectionHome">
          <img id="image" src={main_logo} alt="" />
        </div>
        <div id="Section2">
          <h1 className="description">
            Fresh delicious meals Delivered daily.
          </h1>
          <br />
          <h1 className="text_context">How It Works</h1>
          <h1 className="description">1. Choose Your Plan</h1>
          <div>
            <img src={daily} alt="" id="imagenes" />
            <img src={weekly} alt="" id="imagenes" />
          </div>

          <h1 className="description">2. Pick Your Meal</h1>
          <h1 className="text_context">
            {" "}
            We Have 3 different dishes per Day!{" "}
          </h1>
          <img
            src="https://greenhealthycooking.com/wp-content/uploads/2017/09/Lundberg-Rice-Meal-Prep-Image.jpg"
            alt=""
            id="imagenes"
          />

          <h1 className="description">3. Meal Delivered. Enjoy!</h1>
          <h1 className="text_context">
            {" "}
            Our Delivery Window 11:00pm to 4:00pm{" "}
          </h1>
          <img
            src="https://media4.s-nbcnews.com/j/newscms/2018_44/2484441/18072-woman-eating-cheeseburger-dk-1235_d5c973d816fbd058f70a26bd19a7bcc7.fit-760w.jpg"
            alt=""
            id="imagenes"
          />
          <div id="button">
            <br />
            <button
              className="btn btn-warning"
              onClick={e => this.props.handleOrderNow(e)}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
