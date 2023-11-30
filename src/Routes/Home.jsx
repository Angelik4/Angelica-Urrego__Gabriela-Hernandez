import { useContext } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";


const Home = () => {
    const{datos} = useContext(ContextGlobal);
   
    return (
        <main>
            <h1>Home</h1>
            <div className="card-grid">
                {datos.map((dato) => {
                    return ( 
                        <div className="card" key={dato.id}>
                            <Card
                                name={dato.name}
                                username={dato.username}
                                id={dato.id}
                            />
                            <Link to={`/detalle/${dato.id}`}>Ver detalle</Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Home;
