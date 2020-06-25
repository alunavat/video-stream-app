import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
    // this is to ensure if fetchStream is taking time then we see if it is built
    //or not
  }

  componentWillUnmount() {
    // to clean up resources (video player)
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    // console.log(this.videoRef);
    const { id } = this.props.match.params;

    //creating video player
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    //videoRef is sometimes null because our render returns Loading div
    // if ajax is still loading, thus videoRef null
    // therefore we shifted it here from didMount()
    this.player.load();
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToPorps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToPorps, { fetchStream })(StreamShow);
