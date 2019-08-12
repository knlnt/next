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
          this.handleEndLoad(response.data);
        })
        .catch(() => {
          this.handleErrorLoad();
        });
    };
    handleEndLoad = newData => {
      this.setState({
        load: false,
        error: false,
        data: newData
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
