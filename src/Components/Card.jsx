
import React from "react";
import imgCards from "../images/iconos-cars.png"


const Card = ({ name, username, id }) => {
  const addFav = ()=>{
    
     const storedFavs = JSON.parse(localStorage.getItem("favCards")) || [];

     const isAlreadyFav = storedFavs.some((fav) => fav.id === id);
 
     if (!isAlreadyFav) {
       alert('Se ha agregado a favoritos...');
       const updatedFavs = [...storedFavs, { id, name, username }];
 
       localStorage.setItem("favCards", JSON.stringify(updatedFavs));
     }
  }

  return (
    <>
      <img src={imgCards} alt="" />
      <p><b>Id:</b> {id}</p>
      <p><b>Name:</b> {name}</p>
      <p><b>Username:</b> {username}</p>
      
        <button onClick={addFav} className="favButton">Add fav</button>
    </>
  );
};

export default Card;
