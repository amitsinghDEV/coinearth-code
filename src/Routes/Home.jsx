import React from "react";
import CoinSearch from "../Components/CoinSearch";
import Trending from "../Components/Trending";

const Home = ({ coins }) => {
  return (
    <div className='w-[100%] rounded-div'>
      <div className='flex flex-col gap-5 justify-center items-center  relative w-[100%] h-[30vh] z-99 '>
        <h1 className='text-5xl   md:text-8xl font-bold  text-center'>
          CoinEarth
        </h1>
        <h2 className='text-3xl md:text-6xl font-bold mt-4 '>
          Keep Track of your Coins.
        </h2>
      </div>

      <CoinSearch coins={coins} key={coins.id} />
      <Trending />
    </div>
  );
};

export default Home;
