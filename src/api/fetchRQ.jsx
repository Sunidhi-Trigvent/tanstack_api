import React from "react";
import { useQuery } from "react-query";
// Import useCrud and destructure getData
import useCrud from "../hooks/useCrud";

const FetchRQ = () => {
  // Fetch data using useQuery
  const { getData } = useCrud();

  const getAPiData = async () => {
    try {
      const res = await getData();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAPiData, // Pass the function reference
  });

  return data;
};

export default FetchRQ;
