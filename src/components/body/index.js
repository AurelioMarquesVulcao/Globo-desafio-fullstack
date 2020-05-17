import React, { Component } from 'react';
import './style.css';


class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      url: "http://localhost:3000/users",
      redGree: "",
      statusFilter: "",
      dateInFilter: "todas as datas de inclusão",
      dateChangeFilter: "todas as datas de alteração"

    }
    this.filterOne = this.filterOne.bind(this);
    this.filterTwo = this.filterTwo.bind(this);
    this.applyFilter = this.applyFilter.bind(this);

  }
  componentDidMount() {
    let state = this.state;
    let url = state.url;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.colorStatus(json)
        state.users = json;
        console.log(state.statusFilter)
        this.setState(state);
        console.log(json);
      })

  }

  colorStatus(json) {
    let i = 0
    for (i in json) {
      if (json[i].status === "ativo") {
        json[i].status = [json[i].status, "greeText"]
      } else {
        json[i].status = [json[i].status, "redText"]
      }
    };
  }

  filterOne() {
    let filter = "status=ativo&"
    this.setState({ statusFilter: filter })
  }

  filterTwo() {
    let filter = "status=inativo&"
    this.setState({ statusFilter: filter })
  }

  applyFilter() {
    let dateInFilter = ""
    let dateChangeFilter = ""
    let state = this.state;
    if (state.dateInFilter !== "todas as datas de inclusão") {
      dateInFilter = "date_in=" + state.dateInFilter + "&"
      console.log(dateInFilter)
    }
    if (state.dateChangeFilter !== "todas as datas de alteração") {
      dateChangeFilter = "change_date=" + state.dateChangeFilter + "&"
    }
    let url2 = state.url + "?" + state.statusFilter + dateInFilter + dateChangeFilter;
    console.log(url2)
    fetch(url2)
      .then((r) => r.json())
      .then((json) => {
        this.colorStatus(json)
        state.users = json;
        this.setState(state);
        console.log(json);

      })
    state.dateInFilter = "todas as datas de inclusão"
    state.dateChangeFilter = "todas as datas de alteração"
    this.setState(state);

  }


  render() {
    return (
      <div>
        {/* ----------- start of list------------- */}
        <table className="table table-striped">
          <thead className="bg-white">
            <tr>
              <th scope="col" id="whiteText">..........</th>
              <th scope="col" className="textcenter">USUÁRIO</th>
              <th scope="col" className="textcenter">EMAIL</th>
              <th scope="col" className="textcenter">DATA DE INCLUSÃO</th>
              <th scope="col" className="textcenter">DATA DE ALTERAÇÃO</th>
              <th scope="col" className="textcenter">REGRAS</th>
              <th scope="col" className="textcenter">STATUS</th>
              <th scope="col" id="whiteText">............................</th>
              <th scope="col" className="textcenter">AÇÕES</th>
            </tr>
          </thead>
          {/* --------- start user list for API---------- */}
          <tbody>
            {this.state.users.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row" className="form-check">
                    <input className="form-check-input " type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input>
                  </th>
                  <td className="userName textCollum" >{item.user.toUpperCase()}</td>
                  <td className="textCollum">{item.email}</td>
                  <td className="textCollum">{item.date_in}</td>
                  <td className="textCollum">{item.change_date}</td>
                  <td className="textCollum">{item.rules}</td>
                  <td className="textCollum" id={item.status[1]}>{item.status[0].toUpperCase()}</td>
                  <td></td>
                  <td><a href="/"> <img height= "11px" src={require('../../assets/img/3dots.svg')} alt="undefine"  /> </a></td>
                </tr>
              );
            })}
          </tbody>
          {/* --------- end user list for API---------- */}
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
        {/* ----------- End of list------------- */}


        {/* ----------- Modal-------------- */}
        <div id="rightBody">
          <div className="modal fade" id="filterUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

            <div className="modal-dialog" role="document" id="rightBody">

              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    <div className=" button2 " id="left">
                      <img src={require('../../assets/img/icon-set2.svg')} alt="undefine" id="iconsvg" />
                    </div>
                    Filtros</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    Utilize os filtros abaixo para refinar os resultados
                    da tabela, clique no botão APLICAR para salvar as alterações
                  </div>

                  {/* start first filter */}

                  <form className="filterDate textFilter">
                    <input data-testid="form-field"
                      onClick={() => { this.setState({ dateInFilter: "" }) }}
                      onChange={(e) => { this.setState({ dateInFilter: e.target.value }) }}
                      type="text" value={this.state.dateInFilter.toLocaleUpperCase()}
                      className="btn btn-lg bg-lgray dropdown-toggle btn-lg btn-block pinkText textFilter" />
                  </form><hr></hr>
                  {/* end first filter */}

                  {/* start second filter */}
                  <form className="filterDate textFilter">
                    <input onClick={() => { this.setState({ dateChangeFilter: "" }) }}
                      onChange={(e) => { this.setState({ dateChangeFilter: e.target.value }) }}
                      type="text" value={this.state.dateChangeFilter.toLocaleUpperCase()}
                      className="btn btn-lg bg-lgray dropdown-toggle btn-lg btn-block pinkTex textFilter" />
                  </form><hr></hr>
                  {/* end second filter */}

                  {/* start third filter */}
                  <div>
                    <div className="dropdown">
                      <button className="btn btn-lg bg-lgray dropdown-toggle btn-lg btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="button4" href="/">
                          <img className="svg" alt="description of IMAGEM" src={require('../../assets/img/onOff.svg')} />
                        </div>
                        <b id="teste01" className="textFilter" >ATIVOS E INATIVOS</b>

                      </button><hr></hr>
                      <div className="dropdown-menu bg-lgray " aria-labelledby="dropdownMenuButton" >
                        <div className="dropdown-item textFilter" onClick={this.filterOne}>Ativos</div>
                        <div className="dropdown-item textFilter" onClick={this.filterTwo}>Inativos</div>
                      </div>
                    </div>
                  </div>
                  {/* end third filter */}

                  {/* start submit filter */}
                  <div>
                    <div data-testid="form-btn"
                      type="button" className="btn bg-lgray btn-block box-shadow" onClick={this.applyFilter}>APLICAR</div>
                  </div>
                  {/* end submit filter */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}


export default Body;