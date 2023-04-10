import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";


export const loadDetails = (id) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsUrl(id));
    const screenShotData = await axios.get(gameScreenshotUrl(id));
    dispatch({
        type: 'GAME_DETAIL',
        payload: {
            game: detailsData.data,
            screen: screenShotData.data,
        },
    });
};
