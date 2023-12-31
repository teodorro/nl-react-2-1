import { Component } from "react";
import "../css/main.css";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = { selected: "All" };
  }
  render() {
    return (
      <div className="portfolio">
        <div className="toolbar">
          <Toolbar
            filters={this.filters}
            selected={this.state.selected}
            onSelectFilter={(e) => {
              this.setState({ selected: e.target.innerText });
              console.log(this.state.selected);
            }}
          />
        </div>
        <div className="project-list">
          <ProjectList selected={this.state.selected} />
        </div>
      </div>
    );
  }
}
