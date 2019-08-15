import { useState } from "react";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useLoadData from "./useLoadData";

const withAPIRequest = (WrappedComponent, getApiEndpoint) => {
  return ({ ...props }) => {
    const { url } = getApiEndpoint(props.id);
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const handleEndLoad = newData => {
      setData(newData);
      setLoad(false);
      setError(false);
    };
    const handleErrorLoad = () => {
      setLoad(false);
      setError(true);
    };
    useLoadData(url, handleEndLoad, handleErrorLoad);
    if (load) return <Loader />;
    if (error) return <ErrorMessage />;
    return <WrappedComponent key={+load} data={data} {...props} />;
  };
};

export default withAPIRequest;
