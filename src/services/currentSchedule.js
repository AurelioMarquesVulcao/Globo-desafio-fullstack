import React, { Component } from 'react';


class Tvshow extends Component {

  constructor(props){
    super(props);
    this.state ={
        show: []
    };
  }
  componentDidMount() {
    let url = ' http://localhost:3000/tvshows';
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            let state = this.state;
            // Filtering for current schedule
            const tvNow = []
            let i =0
            for (i in json){
                if (json[i][hour_start] >= ){

                }
            }
            state.show = json;
            this.setState(state);
            console.log(json);
            console.log(tvNow);
            

        })
}


  render() {
    return(
      <div>
      {this.state.show.map((item)=>{
          return(
              <a key={item.id} href={item.url} >
                  {item.name}
              </a>
          )
      })}
    </div>
    )
  }
}

export default Tvshow;