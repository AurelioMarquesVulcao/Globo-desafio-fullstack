import React, { Component } from 'react';
import './style.css';
require("react-toggle/style.css")


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>


        <div className="butonsLeft">
          <button className="button3"></button>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="alignLeft">
            <a className="button2" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 0c-2.995 2.995-7.486 4-11 4 0 8.583 5.068 16.097 11 20 5.932-3.903 11-11.417 11-20-3.514 0-8.005-1.005-11-4zm-7.376 12h7.376v-9.356c2.965 2.238 6.457 3.004 8.912 3.25-.204 2.191-.755 4.236-1.536 6.106h-7.376v9.549c-2.771-2.111-5.643-5.4-7.376-9.549z" /></svg>
            </a>

            <a className="button1" href="/">
              <img className="img" alt="description of IMAGEM" src={require('../../assets/img/icons8-person-30.png')} />
            </a>
            {/* Search */}
            <form className="form-inline">
              <input type="text" className="form-control" placeholder="Pesquisar..." aria-label="Username" aria-describedby="basic-addon1" />
              <a className="buttonSearch" href="/">
                <img src={require('../../assets/img/svg1.svg')} alt="undefine" id="iconsvg" />        
              </a>
            </form>

          </div>
          {/* right icons */}


          <div className="exit" id="right">
            <img src={require('../../assets/img/svg2.svg')} alt="undefine" id="iconsvg" /> 
          </div>

          <div className="options" id="right">
            <svg className="bi bi-gear-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="home" id="right">
            <img src={require('../../assets/img/svg3.svg')} alt="undefine" id="iconsvg" />
          </div>

          <div className="inputUser" id="right">
            <a className="inputUser text-white" href="/">
              <img className="img" alt="description of IMAGEM" src={require('../../assets/img/icons8-person-30.png')} />INCLUIR USUÁRIO
            </a>
          </div>

          <div className=" filter button2 " type="button" data-toggle="modal" data-target="#filterUser" id="right">
            <img src={require('../../assets/img/icon-set2.svg')} alt="undefine" id="iconsvg" />
          </div>

        </div>



      </div>
    )
  }
}

export default Header;
