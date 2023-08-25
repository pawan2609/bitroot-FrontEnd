import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";
import "./Home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <div className="card-grid">
        {data &&
          data.map((card) => (
            <SingleCard
              key={card.id} // You should use 'key' for mapping elements in React
              id={card.id}
              title={card.title}
              thumbnail={card.thumbnail}
              card={card}
            />
          ))}
      </div>
    </div>
  );
}
