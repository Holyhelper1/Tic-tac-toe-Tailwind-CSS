import React, { Component } from "react";
import { Field } from "./Field";
import { connect } from "react-redux";

export class FieldLayoutContainer extends Component {
  render() {
    const { fields } = this.props;
    console.log(fields, "fields in FieldLayout");

    return (
      <div className="fieldWrapper">
        {fields.map((field, index) => (
          <Field key={index} index={index} field={field} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fields: state.fields,
  };
};

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
