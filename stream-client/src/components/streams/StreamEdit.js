import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForms";

class StreamEdit extends React.Component {
  // we need to ensure each component loads its own data
  // i.e. each component can work in isolation
  // this is because when we reload a page the App is reloaded and data is not
  //present until some component fetches it
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // by defaut this send us ID and USerID too which is technically wrong
  // because as part of initial values we passed everything
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  //initialValues is a special prop which lets us pass
  // initial values to reduxFrom
  // eg: { title: "Dummy", description: "Change me too" } pass this object
  // as our form has two fields
  render() {
    //_.pick helps us just take what we need from an object and makes it a new object
    if (this.props.stream) {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          ></StreamForm>
        </div>
      );
    } else return <div>Loading..</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
