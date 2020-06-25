//initially this was code in stream create
// but since edit will require almost same things we created a new component
// this component handles Form, error and field and let's the parent
// handle what action to take like Create or Edit
import React from "react";
import { Field, reduxForm } from "redux-form"; // Field is react class and reduxForm is function

class StreamForm extends React.Component {
  // we use this to show error only
  // when user has actually put cursor on a tag and then did not enter it
  // touched tells if user touched it
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //This is for providing Field. Field does not know what do know and needs
  // a component or actual field assigned to it
  // renderInput(formProps) will be replaced by {input}
  renderInput = ({ input, label, meta }) => {
    // field only gets value for us
    // it is our responsibility to hook it up with actual values and send
    // to our component
    // this will be new way of doing it ...formProps.input

    //console.log(meta); //meta will contain an error property along with other properties
    // by default it will show error message as soon as form is rendered
    // we will fix it and show only if user attempts submit

    // we will use this to show title and description also in red for error
    // if we just add error they always come in red
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );

    // these two in input replaced by code above
    // value={formProps.input.value}
    // onChange={formProps.input.onChange}
  };

  //onSubmit now gets called with form values and not event
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // handleSubmit is provided by redux-form which handles everything for us
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enrter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//this is a redux form function which is called on anything we enter
// used to validate form before submission
const validate = (formValues) => {
  // if we return empty object from here form assumes everything is right
  // and lets use submit
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;

  //redux message error value with field name value and sees if they have any
  //error and based on that passes them to renderInput
};

export default reduxForm({
  form: "streamForm", // name of form can be any name
  validate, // passing validate function created above for validation
})(StreamForm);
