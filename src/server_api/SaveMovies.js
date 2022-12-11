export default function SaveMovies() {
    fetch("https://acb-api.algoritmika.org/api/movies/list", {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-type': 'application/json'
        },

        body: {
            "title": "Example List",
            "movies": [
                "tt0068646",
                "tt0098019"
            ]
        }
    }).then(res => res.json()).then(data => console.log(data));
}
