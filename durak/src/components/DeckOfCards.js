import React, { Component } from 'react'

class Deck extends Component {
  constructor(props) {
    super(props)

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    this.newDeck = suits.map( suit => {
      return values.map( value => {
        return {[value]: suit}
      })
    })

    this.deck = [].concat(...this.newDeck)

  }



    render(){
      console.log("Deck is", this.deck)
      return (
        <div>
          {this.deck}
        </div>
      )
    }

}


export default Deck
