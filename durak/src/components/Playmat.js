import React, { Component } from 'react';

  class Playmat extends Component{
    constructor(props){
      super(props)

      this.state = {
        deck: [],
        playerHand: [],
        opponentHand: []
      }



        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        const newDeck = suits.map( suit => {
          return values.map( value => {
            return {[value]: suit}
          })
        })


        this.setState({deck: [].concat(...newDeck)})


    }

    render(){
      console.log("state.deck is", this.state.deck)
      return(
        <div>
          BLAAAHHHH

        </div>
      )
    }



  }

  export default Playmat
