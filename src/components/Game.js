import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadDetails } from '../actions/detailsAction';

const Game = ({name, released, image, id}) => {
  const dispatch = useDispatch();
  const getDetailHandler = () => {
    dispatch(loadDetails(id));
  }
  return (
    <StyledGame onClick={getDetailHandler}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
    </StyledGame>
  )
};



const StyledGame = styled(motion.div)`
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game;