
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "https://clone-spotify-app.web.app/";
const clientId = "b4de45c3a3294f80964d8b31d10d9818";

const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromResponse = () => {
         return window.location.hash
           .substring(1)
           .split("&")
           .reduce((initial, item) => {
             // #accessToken
             let parts = item.split("=");
             initial[parts[0]] = decodeURIComponent(parts[1]);

             return initial;
           }, {});
       };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;