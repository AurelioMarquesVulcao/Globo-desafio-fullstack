import React, { Component } from 'react';
import './style.css';


class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []

    };
  }
  componentDidMount() {
    let url = 'http://localhost:3000/users';
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        let state = this.state;
        state.users = json;
        this.setState(state);
        console.log(json);
      })

  }

  render() {
    return (
      <div className="">
        <table className="table table-striped">
          <thead className="bg-white">
            <tr>
              <th scope="col"></th>
              <th scope="col">USUÁRIO</th>
              <th scope="col">EMAIL</th>
              <th scope="col">DATA DE INCLUSÃO</th>
              <th scope="col">DATA DE ALTERAÇÃO</th>
              <th scope="col">REGRAS</th>
              <th scope="col">STATUS</th>
              <th scope="col" id="whiteText">............................</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row" className="form-check">
                    <input className="form-check-input " type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input>
                  </th>
                  <td className="userName">{item.user.toUpperCase()}</td>
                  <td>{item.email}</td>
                  <td>{item.date_in}</td>
                  <td>{item.change_date}</td>
                  <td>{item.rules}</td>
                  <td id="greeText">{item.status.toUpperCase()}</td>
                  <td></td>
                  <td><a href="/"> <img src={require('../../assets/img/3dots.svg')} alt="undefine" id="iconsvg"/> </a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* navigation */}
        <nav aria-label="..." className="navButton">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link text-muted" href="/" >Primeiro</a>
            </li>
            <li className="page-item "><a className="page-link text-muted" href="/">Anterior</a></li>
            <li className="page-item">
              <a className="page-link text-white" href="/" id="target1">1 </a>
            </li>
            <li className="page-item"><a className="page-link text-muted" href="/">Próximo</a></li>
            <li className="page-item">
              <a className="page-link text-muted" href="/">Ultimo</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}


export default Body;