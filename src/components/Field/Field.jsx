import React, { Component } from "react";
import { connect } from "react-redux";
import { whoIsWinner } from "../Information/Information";
import {
  setFields,
  setCurrentPlayer,
  setIsDraw,
  setIsGameEnded,
} from "../../actions";

export class FieldContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickCell = this.handleClickCell.bind(this);
  }

  handleClickCell() {
    const { index, currentPlayer, dispatch, fields, winner } = this.props;

    let copyArrayFields = [...fields];
    if (winner || copyArrayFields[index]) {
      dispatch(setIsGameEnded(true));
      return;
    }

    copyArrayFields[index] = currentPlayer ? "X" : "O";
    dispatch(setFields(copyArrayFields));
    dispatch(setCurrentPlayer(!currentPlayer));

    const hasEmptyValue = copyArrayFields.some((value) => value === "");

    dispatch(setIsDraw(!hasEmptyValue));
  }
  render() {
    return (
      <div className="field" onClick={this.handleClickCell}>
        {this.props.fields[Number(this.props.index)]}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  index: ownProps.index,
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
  fields: state.fields,
  winner: whoIsWinner(state.fields),
});

export const Field = connect(mapStateToProps)(FieldContainer);
