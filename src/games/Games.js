import React from 'react';
import CardItem from '../cardItem/CardItem';

const Games = ({game}) => {
    console.log(game, 'game');
  return (
    <div>
      <section>
        {game.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default Games;
