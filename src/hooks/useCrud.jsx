import React from "react";
import useAuth from "./useAuth";

const useCrud = () => {
  const { request } = useAuth();

  // get data
  const getData = () => {
    return request.get("/"); // This will call the correct API endpoint
  };

  
  //   // delete data
//   const deleteData = async (id) => {
//     return await request.delete(`/${id}`);
//   };

  return { getData };


};

export default useCrud;




