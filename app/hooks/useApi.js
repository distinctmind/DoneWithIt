import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    //There is error in database response, update state variable error so user is notified.
    if (!response.ok) return setError(true);

    //Database returns successfully, set data accordingly
    setError(false);
    setData(response.data);
  };
  return { data, error, loading, request };
};
