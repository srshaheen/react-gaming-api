import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { loadGames } from "../actions/gamesActions";
import Game from '../components/Game';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
    
    //get data
    const {popular, newGames, upComing} = useSelector((state) => state.games);
  return (
    <GameList>
        <h2>Upcoming Games</h2>
        <Games>
            {upComing.map(game => (
                <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id}/>
            ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
            {popular.map(game => (
                <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id}/>
            ))}
        </Games>
        
        <h2>New Games</h2>
        <Games>
            {newGames.map(game => (
                <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id}/>
            ))}
        </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-row-gap: 5rem;
    grid-column-gap: 3rem;
`;


export default Home;