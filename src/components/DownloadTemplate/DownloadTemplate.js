import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class DownloadTemplate extends Component {
  state = {
    load: true,
    error: false
  };
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { children } = this.props;
    const { load, error } = this.state;
    const content = (() => {
      if (load) return <Loader />;
      if (error) return <ErrorMessage />;
      return children;
    })();
    return content;
  }
  loadData = () => {
    const { url, onUpdateData } = this.props;
    axios
      .get(url)
      .then(response => {
        onUpdateData(response.data);
        this.handleEndLoad();
      })
      .catch(() => {
        this.handleErrorLoad();
      });
  };
  handleEndLoad = () => {
    this.setState({
      load: false,
      error: false
    });
  };
  handleErrorLoad = () => {
    this.setState({
      load: false,
      error: true
    });
  };
}

DownloadTemplate.propTypes = {
  url: PropTypes.string.isRequired,
  onUpdateData: PropTypes.func.isRequired
};

export default DownloadTemplate;
