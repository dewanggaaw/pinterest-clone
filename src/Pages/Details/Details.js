import React, { useEffect, useState } from "react";
import "./style.css";

function Details(match) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchDetails();
    console.log(match, "match");
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos`
    );
    const details = await data.json();
    setDetails(details);
  };
  return (
    <>
      <div className="detailsContainer">
        <div>This is detail page, unfinished</div>

        <img
          className="imgDetails"
          key={details.id}
          src={details.thumbnailUrl}
        />
        <p>{details.title}</p>
      </div>
    </>
  );
}

export default Details;
