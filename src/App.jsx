import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider, ThemeProvider } from "./Components/utils/global.context";
import BodyStyles from "./Components/BodyStyles";

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <ThemeProvider>
                    <BodyStyles/>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </ThemeProvider>
            </ContextProvider>
        </div>
    );
}

export default App;
