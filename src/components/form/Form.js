import React, { Component } from "react";
import "./css/form.css";

class Form extends Component {
  state = {
    day: "Monday",
    image: "",
    dishes: [
      {
        name: "",
        description: "",
        image: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      dishes: [...this.state.dishes, { name: "", description: "", image: "" }]
    });
  };

  dishesToAdd = () => {
    let { dishes } = this.state;

    return dishes.map((dishes, idx) => {
      return (
        <div key={idx} id="card">
          <label>
            Name:
            <input
              className="form-item"
              type="text"
              value={dishes.name}
              name="name"
              onChange={e => this.handleDishInputChange(e, idx)}
            />
          </label>
          <label>
            Description:
            <input
              className="form-item"
              type="text"
              value={dishes.description}
              name="description"
              onChange={e => this.handleDishInputChange(e, idx)}
            />
          </label>
          <label>
            Image:
            <input
              className="form-item"
              type="text"
              value={dishes.image}
              name="image"
              onChange={e => this.handleDishInputChange(e, idx)}
            />
          </label>
        </div>
      );
    });
  };

  handleDishInputChange = (e, idx) => {
    const newDishes = this.state.dishes.map((dishes, dishesIdx) => {
      if (idx !== dishesIdx) {
        return dishes;
      }
      return { ...dishes, [e.target.name]: e.target.value };
    });
    this.setState({ dishes: newDishes });
  };

  handleSelectChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log(this.state);

    return (
      <div id="Section1">
        <div className="center">
          <div className="card">
            <form onSubmit={e => this.props.submitAdminForm(e, this.state)}>
              <label>
                Day:
                <select
                  onChange={this.handleSelectChange}
                  name="day"
                  defaultValue={this.state.day}
                  className="form-item"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </label>
              <label>
                Day Image:
                <input
                  type="text"
                  value={this.state.image}
                  name="image"
                  onChange={this.handleSelectChange}
                  className="form-item"
                />
              </label>
              ;
              <button
                className="btn btn-success"
                onClick={e => this.handleClick(e)}
              >
                Add New Dish
              </button>
              {this.dishesToAdd()}
              <input type="Submit" name="Submit" className="form-submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
