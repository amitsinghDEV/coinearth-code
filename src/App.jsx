import "./App.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import Account from "./Routes/Account";
import axios from "axios";
import CoinPage from "./Routes/CoinPage.jsx";
import Footer from "./Components/Footer.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";
export const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  // useEffect(() => {
  //   async function getdata() {
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //   }
  //   getdata();
  // }, []);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path='/CoinEarth'
            element={<Home coins={coins} key={coins.id} />}
          />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
