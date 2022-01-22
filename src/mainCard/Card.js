import React, { useEffect, useState } from 'react';
import CardItem from '../cardItem/CardItem';
import Games from '../games/Games';
import './card.css'


const URL = "https://adaorachi.github.io/esetech-assessment-api/game-data.json";

const Card = () => {
  const [loading, setLoading] = useState(true);
      const [game, setGame] = useState([]);
      

      const fetchGame = async () => {
            setLoading(true);
        try {
          const response = await fetch(URL);
          const data = await response.json();
        //   console.log(data);
             setGame(data);
             setLoading(false);
        } catch (error) {
          console.log(error);
             setLoading(false);
        }
      };
      useEffect(() => {
        fetchGame();
      }, []);
        if (loading) {
          return (
            <main>
              <h1>Loading...</h1>
            </main>
          );
        }


  return (
    <div>
        <Games game={game}/>
    </div>
     
  );
};

export default Card;
