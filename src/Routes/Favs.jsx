import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const Favs = () => {
  const [favCards, setFavCards] = useState([]);

  useEffect(() => {
    // Obtener los datos del localStorage al cargar la página
    const storedFavs = JSON.parse(localStorage.getItem("favCards")) || [];
    setFavCards(storedFavs);
  }, []);

  return (
    <>
    <main>
      <h1>Dentists Favs</h1>
        <div className="card-grid">
          {favCards.map((fav) => (
            <div className="card" key={fav.id}>
              <Card name={fav.name} username={fav.username} id={fav.id} />
              <Link to={`/detalle/${fav.id}`}>Ver detalle</Link>
            </div>
          ))}
        </div>
    </main>
    </>
  );
};

export default Favs;
