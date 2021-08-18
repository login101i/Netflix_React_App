import { useState, useEffect } from "react";
import axios from "axios";

import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTdiZjBkOGI0YmQ4NDdkODZjNzU4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTIzNTQ0MiwiZXhwIjoxNjI5NDk0NjQyfQ.1ObhJ8ZfjWeOVBVDiXZBbnw7uHZfDipc3U2fbWtiyqE",
          },
        });

        setLists(res.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  console.log(lists);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />

      {lists.map((list, index) => (
        <>
          <List list={list} key={index}/>
         
        </>
      ))}
    </div>
  );
};

export default Home;
