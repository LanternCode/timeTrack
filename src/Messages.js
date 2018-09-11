import React, { Component } from 'react';

class Messages extends Component {

    constructor(props){
      super(props);

      this.state = {
          messages: [
              "Welcome to the tracker, keep waiting to see new messages!",
              "A good start is something to be proud of !",
              "Half a minute! Surely impressive!",
              "You've spend more time here than 90% of all users!",
              "Wow, you really are determined to see what's next!",
              "Now you're in the legendary 0,01% of people who saw this message!",
              "15 minutes, can't believe it!",
              "You know, I really love pineapples.",
              "An hour, 3600 seconds, that's undeniably enought to write an app like this!",
              "The hour count will keep stacking forever! Such well developed :-)"
          ],
          timestamps: [
             '00:00:10', '00:00:30', '00:01:00', '00:02:00', '00:05:00', '00:15:00', '00:30:00', '01:00:00', '24:00:00', '00:00:00'
          ]
      };
    }

  render(){

      if(this.props.time < 10) var caseNum = 0;
      else if(this.props.time < 30) caseNum = 1;
      else if(this.props.time < 60) caseNum = 2;
      else if(this.props.time < 120) caseNum = 3;
      else if(this.props.time < 300) caseNum = 4;
      else if(this.props.time < 900) caseNum = 5;
      else if(this.props.time < 1800) caseNum = 6;
      else if(this.props.time < 3600) caseNum = 7;
      else if(this.props.time < 86400) caseNum = 8;
      else caseNum = 9;

    return(
      <div>
        <br /><br />
        <p>{this.state.messages[caseNum]}</p>
        <br /><br />
        <p>Reach {this.state.timestamps[caseNum]} to see a new message appear directly above!</p>
      </div>
    );
  }
}

export default Messages
