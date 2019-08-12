import { Component } from "react";
import axios from "axios";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { BASE_URL } from "../../constants";

const withAPIRequest = (WrappedComponent, getApiEndpoint) => {
  return class extends Component {
    state = {
      load: true,
      error: false,
      data: []
    };
    componentDidMount() {
      this.loadData();
    }
    render() {
      const { load, error, data } = this.state;
      if (load) return <Loader />;
      if (error) return <ErrorMessage />;
      return <WrappedComponent data={data} />;
    }
    loadData = () => {
      const { url } = getApiEndpoint(this.props);
      axios
        .get(BASE_URL + url)
        .then(response => {
          this.onUpdateData(response.data);
          this.handleEndLoad();
        })
        .catch(() => {
          this.handleErrorLoad();
        });
    };
    onUpdateData = newData => {
      this.setState({
        data: newData
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
  };
};

export default withAPIRequest;
