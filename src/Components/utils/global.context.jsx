import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ThemeContext = createContext();

export const themes = {
  light: 'light',
  dark: 'dark',
};

const TOGGLE_THEME = 'TOGGLE_THEME';

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === themes.light ? themes.dark : themes.light;
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const urlApi = "https://jsonplaceholder.typicode.com/users";
      const resp = await axios.get(urlApi);
      setDatos(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContextGlobal.Provider value={{ getData, datos }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || themes.light;
  const [theme, dispatch] = useReducer(themeReducer, savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    localStorage.setItem('theme', newTheme);
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};