import React, { Component } from "react";
import tutorialService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guncellenecekTutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
    };
  }

  componentDidMount() {
    // this.detayTutorial(this.props.match.params.id);
  }

  detayTutorial(id) {
    tutorialService
      .get(id)
      .then((gelenDetayTutorial) => {
        this.setState({
          guncellenecekTutorial: gelenDetayTutorial.data,
        });
      })
      .catch((hata) => {
        console.log("detay gelmedi, hata: " + hata);
      });
  }

  render() {
    return <div>Tutorial detay sayfasıdır.</div>;
  }
}
