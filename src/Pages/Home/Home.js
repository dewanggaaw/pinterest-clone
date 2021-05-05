import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import SearchBar from "../../Shared/Searchbar";

function Home(props) {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [filteredRes, setFilteredRes] = useState();
  const [input, setInput] = useState("");
  const pressHeart = () => {
    setPressed(!pressed);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const fetchedImages = await data.json();
    console.log(fetchedImages);
    setFetchedImages(fetchedImages);
  };
  const updateInput = async (input) => {
    const filtered = fetchedImages.filter((imgSearch) => {
      return imgSearch.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setFilteredRes(filtered);
  };

  return (
    <>
      <div className="mainContainer">
        {/* <SearchBar input={input} onChange={updateInput} /> */}
        <div className="container">
          {fetchedImages.map((item) => (
            <>
              {/* CARD */}
              <div className="card" key={item.id}>
                <AiFillHeart
                  key={item.id}
                  onClick={() => pressHeart()}
                  color={pressed ? "white" : "red"}
                />

                <Link to={`/details/${item.id}`}>
                  <div className="contentContainer">
                    <div key={item.id}>
                      <img
                        className="img"
                        key={item.id}
                        src={item.thumbnailUrl}
                      />
                    </div>
                    <div className="imgTitle">{item.title}</div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
