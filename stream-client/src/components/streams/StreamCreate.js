import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StremForm from "./StreamForms";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StremForm onSubmit={this.onSubmit}></StremForm>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

// This can be used when we have to pass two callbacks
// const fromWrapped = reduxForm({
//   form: "streamCreate", // name of form can be any name
//   validate, // passing validate function created above for validation
// })(StreamCreate);

// export default connect(null, { createStream })(fromWrapped);
