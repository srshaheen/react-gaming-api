import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const GameDetail = () => {
    const {game, screen} = useSelector((state) => state.details)
  return (
    <CardShadow>
        <Detail>
            <Stats>
                <div className="rating">
                    <h3>{game.name}</h3>
                    <p>Rating: {game.rating}</p>
                </div>
                <Info>
                    <h3>Platforms</h3>
                    <Platforms>
                        {game.platforms.map(data => (
                            <h5 key={data.platform.id}>{data.platform.name}</h5>
                        ))}
                    </Platforms>
                </Info>
            </Stats>
            <Media>
                <img src={game.background_image} alt="images" />
            </Media>
            <div className="description">
                <p>{game.description_raw}</p>
            </div>
            <div className="gallary">
                {screen.results.map(screen => (
                    <img src={screen.image} key={screen.id} alt="images" />
                ))}
            </div>
        </Detail>
    </CardShadow>
  );
};


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background: #ff7676;
    }

    &::-webkit-scrollbar-track{
        background: #fff;
    }
`


const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: grid;
    grid-template-columns: 4fr 8fr;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    img{
        width: 100%;
    }
`

export default GameDetail;