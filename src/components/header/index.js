import React, { Component } from 'react';
import './style.css'


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <header>


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
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <a className="buttonSearch" href="/">
                <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" />
                  <path d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                </svg>
              </a>
            </form>

          </div>
          <div className="right">
            <svg className="bi bi-power" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.578 4.437a5 5 0 104.922.044l.5-.866a6 6 0 11-5.908-.053l.486.875z" />
              <path d="M7.5 8V1h1v7h-1z" />
            </svg>
          </div>


        </div>






      </header>
    )
  }
}

export default Header;
