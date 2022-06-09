import { useState } from "react";

export default useApi = (apiFunc) => {
  console.log("Inside useApi");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    console.log("going to call api function");
    console.log(args);
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    console.log("function response: ", response);

    if (response) {
      setData(response.data);
      setError(!response.ok);
    }
    return response;
  };
  return { data, error, loading, request };
};
