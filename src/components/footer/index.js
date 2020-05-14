import React, { Component } from 'react';
import './style.css';
// import Tvshow from '../../services/currentSchedule'



class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: "",
      dateNow: "",
      onAir: "On Air",
      show: [],
      showUpdate: []

    };

  }
  componentDidMount() {
    let state = this.state
    // Function to display the time after opening the page
    this.time = setInterval(() => {
      const now = new Date()
      var seconds = now.getSeconds()
      var minutes = now.getMinutes()
      var Hour = now.getHours()
      if (seconds <= 9) {
        seconds = "0" + seconds
      }
      if (minutes <= 9) {
        minutes = "0" + minutes
      }
      if (Hour <= 9) {
        Hour = "0" + Hour
      }

      state.hour = "// " + Hour + ":" + minutes + ":" + seconds

      this.setState(state);
      // to check the time on the console
      // console.log(state.hour);
    }, 1000);


    // Function to display the current date
    this.date = setInterval(() => {
      const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
      const monthName = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      const now = new Date()
      state.dateNow = dayName[now.getDay()] + ', ' + now.getDate() + ' de ' + monthName[now.getMonth()] + ' de ' + now.getFullYear()
      this.setState(state);
      // to check the time on the console
      // console.log(state.dateNow);
    }, 1000);
    this.setState(state);





    var url = ' http://localhost:3000/tvshows';

    function tvdata() {

      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          const now = new Date()

          var seconds = now.getSeconds()
          var minutes = now.getMinutes()
          var Hour = now.getHours()
          if (seconds <= 9) {
            seconds = "0" + seconds
          }
          if (minutes <= 9) {
            minutes = "0" + minutes
          }
          if (Hour <= 9) {
            Hour = "0" + Hour
          }
          var hourNow = Hour + ":" + minutes + ":" + seconds
          
          // Filtering for current schedule
          var tvNow = []
          let i = 0
          for (i in json) {
            if (json[i]["hour_end"].split(":") > hourNow.split(":")) {
              // tvNow = json[i]["name"]
              // console.log(tvNow);
              if (json[i]["hour_start"].split(":") < hourNow.split(":")) {
                tvNow = json[i]["name"]
                state.show = tvNow + " " + json[i]["hour_start"]
                state.showUpdate = Hour + ":" + minutes
                console.log(tvNow);
              }
            }
          }

        })
    }
    tvdata()
    this.date = setInterval(() => { tvdata() }, 300000);



  }


  render() {
    return (
      <div>
        <div className="footer text-white bg-dark">

          <div className="nowTv row">
            <div className="col-md-auto"> {this.state.onAir}{this.state.show}</div>
            <div className="col-md-auto"> Ultima atulização em: {this.state.showUpdate}</div>
          </div>

          <div className="nowTime">
            {this.state.dateNow}  <div className="hour align-middle">{this.state.hour}</div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer;
