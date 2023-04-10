import axios from "axios";
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from "../api";


export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upComing: upcomingGamesData.data.results,
        }
    })
}