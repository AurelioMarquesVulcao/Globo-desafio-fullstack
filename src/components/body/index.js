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
              <th scope="col"></th>
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
                  <td className="userName">{item.user}</td>
                  <td>{item.email}</td>
                  <td>{item.date_in}</td>
                  <td>{item.change_date}</td>
                  <td>{item.rules}</td>
                  <td>{item.status}</td>
                  <td></td>
                  <td>...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* navigation */}
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="/" >Anterior</a>
            </li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>
            <li className="page-item active">
              <a className="page-link" href="/">2 <span className="sr-only">(atual)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="/">3</a></li>
            <li className="page-item">
              <a className="page-link" href="/">Próximo</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}


export default Body;