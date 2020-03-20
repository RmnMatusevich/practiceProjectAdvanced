import React from "react";
import CollageItem from "./CollageItem";
class Collage extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      image: "",
      tittle: "",
      description: "",
      collage: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeTittle = this.handleChangeTittle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }
  handleChangeImage(e) {
    this.setState({
      image: e.target.value
    });
  }
  handleChangeTittle(e) {
    this.setState({
      tittle: e.target.value
    });
  }
  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  btnClick(obj) {
    obj.collage.push({
      src: this.state.image,
      tittle: this.state.tittle,
      description: this.state.description
    });
  }
  render() {
    const obj = {
      collage: [
        {
          src:
            "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
          tittle: "Spring Boot",
          description:
            "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
        },
        {
          src:
            "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
          tittle: "Spring Framework",
          description:
            "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
        },
        {
          src:
            "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
          tittle: "Spring Cloud Data Flow",
          description:
            "An orchestration service for composable data microservice applications on modern runtimes."
        },
        {
          src:
            "https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
          tittle: "Spring Cloud",
          description:
            "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices"
        },
        {
          src:
            "https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
          tittle: "Spring Data",
          description:
            "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
        },
        {
          src:
            "https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2",
          tittle: "Spring Integration",
          description:
            "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters"
        }
      ]
    };

    const newCollageObj = [];
    this.state.collage.length = 0;
    let items = obj.collage;
    for (let item of items) {
      if (item.description.toLocaleLowerCase().includes(this.state.userInput)) {
        newCollageObj.push(item);
        this.state.collage.push(item);
      }
    }

    return (
      <React.Fragment>
        <form id="search">
          <label id="search-label">Search</label>
          <input
            type="search"
            id="search-input"
            onChange={this.handleChange}
            value={this.state.userInput}
          />
        </form>
        <form id="adding-collage">
          <label>Upload photo</label>
          <input id="photo-src" onChange={this.handleChangeImage}></input>
          <label>Tittle</label>
          <input id="title-input" onChange={this.handleChangeTittle}></input>
          <label>Description</label>
          <input
            id="description-input"
            onChange={this.handleChangeDescription}
          ></input>
          <button
            id="submit-button"
            type="button"
            onClick={() => {
              this.btnClick(obj);
            }}
          >
            Submit
          </button>
        </form>{" "}
        <div className="collage">
          {this.state.collage.map(i => {
            return (
              <CollageItem
                src={i.src}
                tittle={i.tittle}
                description={i.description}
                key={obj.collage.indexOf(i)}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Collage;
