import { useEffect, useState } from "react";
import Dto from "../dto";

const useQuery = (url, dtoKey) => {
  const [state, setState] = useState({
    data: [],
    status: 0,
    isSuccess: false,
    loading: true,
    error: null
  });
  const fetchData = () =>
    fetch(url)
      .then(async (response) => {
        return {
          ...state,
          status: response.status,
          isSuccess: response.ok,
          data: await response.json()
        };
      })
      .then((data) => {
        if (dtoKey) {
          const dto = Dto.get(dtoKey);
          if (dto) {
            data.data = new dto(data.data);
          }
        }
        setState({
          ...data,
          loading: false
        });
      })
      .catch((error) => {
        setState({
          ...state,
          error,
          loading: false
        });
      });

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useQuery;
