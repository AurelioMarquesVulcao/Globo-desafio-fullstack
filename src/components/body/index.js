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
      <div className="container">
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
                  <th scope="row">1</th>
                  <td>{item.user}</td>
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
      </div>
    );
  }
}


export default Body;