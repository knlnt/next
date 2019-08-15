import { useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../../constants";

const useLoadData = (url, handleEndLoad, handleErrorLoad) => {
  useEffect(() => {
    axios
      .get(BASE_URL + url)
      .then(response => {
        handleEndLoad(response.data);
      })
      .catch(() => {
        handleErrorLoad();
      });
  }, []);
};

export default useLoadData;
