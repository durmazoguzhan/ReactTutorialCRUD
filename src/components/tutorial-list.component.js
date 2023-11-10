import React, { Component } from "react";
import tutorialService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
      currentIndex: -1,
      currentTutorial: null,
      searchInput: "",
    };
  }

  componentDidMount() {
    this.tutorialllariGetir();
  }

  tutorialllariGetir() {
    tutorialService
      .getAll()
      .then((tutorialListesi) => {
        const filteredTutorials = tutorialListesi.data.filter((tutorial) => tutorial.title.toLowerCase().includes(this.state.searchInput.toLowerCase()));

        this.setState({
          tutorials: filteredTutorials,
        });
      })
      .catch((hata) => {
        console.log("hata oluştu" + hata);
      });
  }

  AktifTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  onChangeSearchInput = (e) => {
    this.setState(
      {
        searchInput: e.target.value,
      },
      () => {
        this.tutorialllariGetir();
      }
    );
  };

  render() {
    const { tutorials, currentTutorial, currentIndex, searchInput } = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Tutorial Listesi</h4>
          <br />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tutorial ara..."
              aria-describedby="button-addon2"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <button className="btn btn-outline-dark" type="button" id="button-addon2">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={"list-group-item " + (index === currentIndex ? "active" : "")}
                  onClick={() => this.AktifTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Başlık : </strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Açıklama : </strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Durum : </strong>
                </label>{" "}
                {currentTutorial.published ? "Yayınlandı " : "Bekleniyor..."}
              </div>
              <Link to={"/tutorials/" + currentTutorial.id} className="btn btn-success">
                Düzenle
              </Link>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
