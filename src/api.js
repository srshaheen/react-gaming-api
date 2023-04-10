//base url
const baseUrl = 'https://api.rawg.io/api/';


// getting the month

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}

// getting the day

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
}

//getting current year

const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
}


//Current Day/Month/Year

const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=1c1b7eaca4204401ae401573e3235f5f&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=1c1b7eaca4204401ae401573e3235f5f&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=1c1b7eaca4204401ae401573e3235f5f&dates=${lastYear},${currentDate}&ordering=-relased&page_size=10`;

export const popularGamesUrl = () => `${baseUrl}${popular_games}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcoming_games}`;
export const newGamesUrl = () => `${baseUrl}${new_games}`;

//get details
export const gameDetailsUrl = (game_id) => `${baseUrl}games/${game_id}?key=1c1b7eaca4204401ae401573e3235f5f`;
export const gameScreenshotUrl = (game_id) => `${baseUrl}games/${game_id}/screenshots?key=1c1b7eaca4204401ae401573e3235f5f`;
