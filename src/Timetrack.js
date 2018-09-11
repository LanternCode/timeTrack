import React, { Component } from 'react';
import Messages from './Messages';

class Timetrack extends Component {

    constructor(props){
      super(props);

      this.state = {
          time: 0,
          hours: '00',
          minutes: '00',
          seconds: '00'
      };
    }

componentDidMount(){
    setInterval(() => {
        let time = this.state.time + 1;
        let seconds = (time % 60) < 10 ? '0' + (time % 60) : (time % 60);
        let minutes = Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60);
        let hours = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
        this.setState({time, seconds, minutes, hours});
    }, 1000);
}

  render(){
    return(
      <div>
          <p>Total time spend since this page was (re)loaded is:</p>
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
          <Messages time={this.state.time} />
      </div>
    );
  }
}

export default Timetrack;
