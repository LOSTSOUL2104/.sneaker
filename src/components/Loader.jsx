import React, { useState, useEffect } from "react";
import axios from "axios";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/loader")
      .then((response) => {
        setIsLoading(response.data.loading);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-screen bg-black">
          <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        </div>
      ) : (
        <div>Loaded!</div>
      )}
    </div>
  );
};

export default Loader;