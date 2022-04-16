import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../App.css';
import { Component } from "react";
import { getApidata } from "../helper/getAPIData";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

class Carouseldemo extends Component {
  constructor() {
    super();
    this.state = {
      load: true,
      events: []
    }
  }
  componentDidMount() {
    getApidata("GET", null)
      .then(response => {
        this.setState({
          events: response.data,
          load: false
        }, () => {
          console.log(this.state.events);
        })
      })
      .catch(error => {

      })
  }
  renderEvents() {
    let events = [];
    for (let i = 0; i < this.state.events.length; i++) {
      events.push(
        <div>
          <div>
            {new Date(this.state.events[i].eventdate).getDate()}-{new Date(this.state.events[i].eventdate).getMonth()}
          </div>
          <Item>
            {this.state.events[i].eventname}
          </Item>
        </div>
      )
    }
    return events;
  }
  render() {
    return (
      this.state.load ?
        <div style={{ padding: "10%" }}>loading...</div>
        :
        <div className="Carouseldemo">
          <Carousel breakPoints={breakPoints}>
            {this.renderEvents()}
          </Carousel>
        </div>
    )
  }
}

export default Carouseldemo;