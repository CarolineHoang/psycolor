import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import RandomColors from "./randomColors";






const Wrapper = styled.div`
  color: white;
  /* background-color: pink; */
  height: 100vh;
  width: 100%;
  /* top: 0vw; */
  display:flex;
  justify-content: center;
  align-items: center;
`;








// const SidebarContent = props => {
//     return (
//       <div>
//           <RandomColors/>
//       </div>
//     );
//   };









class UI extends Component {
  constructor() {
    super();

    this.state = {
      clicked: null,
      answer: "something"
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.wrapperFunction = this.toggleClass.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.printTester = this.printTester.bind(this);
    this.getGame = this.getGame.bind(this);
  }

  toggleClass(event) {
    const currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
  }



  setAnswer(event, callBack){
    // console.log(event)
    // console.log(callBack) // to use this we need the callback parameter but usually we don't need a callback paramenter to make a callback
    this.setState({ answer: event.currentTarget.value },
    function () {this.printTester()});
    // event.preventDefault();
  }

  printTester(){
    console.log(this.state.answer)
  }

//   condition of when to reload the page and thus update all the colors in the app
  shouldComponentUpdate(nextProps, nextState) { 
    if (nextState.answer !== 0) { // in it's current state, this condition ins never true because the value is either true or false (the background is )
      return false;
    }
    return true;
  }


  componentDidMount() {
    // // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    // setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
    // setTimeout(this.getGame, 5000);
  }




  getGame () {
    return (
      <div>
          <RandomColors wait= {5000}/>
      </div>
    );
  };




//onClick= {this.getRandColor}
  render() {
    return (
      <Wrapper >
          {this.getGame()}

          {/* <RandomColors/> */}

      </Wrapper>
    );
  }
}
UI.defaultProps = {
  color: "blue",
  homepageLink: "https://www.columbiaspectator.com/",

  urls: [
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/",
    "https://www.columbiaspectator.com/"
  ]
};
export default UI;