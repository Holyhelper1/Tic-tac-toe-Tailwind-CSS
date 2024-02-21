import React, { Component } from "react";
import { FieldLayout } from "./components/Field/FieldLayout";
import { InformationLayout } from "./components/Information/InformationLayout";
import { connect } from "react-redux";
import {
  setCurrentPlayer,
  setFields,
  setIsDraw,
  setIsGameEnded,
} from "./actions";

export class GameContainer extends Component {
  handleStartNewGame = () => {
    this.props.startNewGame();
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <button
            className="text-3xl p-2 m-2 rounded-md bg-black hover:bg-gray-800 active:bg-gray-900 text-yellow-400 font-bold"
            onClick={this.handleStartNewGame}>
            New Game
          </button>
        </div>
        <FieldLayout />
        <InformationLayout />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNewGame: () => {
      const clearGame = () => {
        dispatch(setCurrentPlayer(true));
        dispatch(setFields(Array(9).fill("")));
        dispatch(setIsDraw(false));
        dispatch(setIsGameEnded(false));
      };
      return clearGame();
    },
  };
};

export const Game = connect(null, mapDispatchToProps)(GameContainer);
