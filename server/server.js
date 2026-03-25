/*
 * express is a popular Node.js framework that makes it easy to create
 * a web server and define routes (URL paths the server responds to).
 * require() is Node's way of importing an external package — similar
 * to "import" in other languages.
 */
const express = require('express')

/*
 * path is a built-in Node.js module (no installation needed) that
 * provides utilities for working with file and directory paths.
 * We use it to build the correct path to the 'files' folder below.
 */
const path = require('path')

/*
 * express() creates the actual server application object.
 * All configuration (routes, middleware) is added to this 'app' variable.
 */
const app = express()

/*
 * express.static() is middleware that tells the server to automatically
 * serve any file sitting in the given folder when a client requests it.
 *
 * path.join(__dirname, 'files') builds the absolute path to the 'files'
 * sub-folder:
 *   - __dirname is a special Node variable that holds the directory of
 *     the currently running file (i.e. the 'server' folder)
 *   - path.join() concatenates path segments in a cross-platform way
 *     (uses '\' on Windows, '/' on Linux/macOS)
 *
 * In practice this means: if a browser requests '/', the server sends
 * back 'server/files/index.html' automatically.
 *
 * app.use() registers middleware — code that runs for every incoming
 * request before it reaches a specific route handler.
 */
app.use(express.static(path.join(__dirname, 'files')));

/*
 * app.get() defines a route: when a client makes an HTTP GET request
 * to the path '/movies', the server runs the callback function.
 *
 * GET is the HTTP method used for fetching data (as opposed to POST,
 * which is used for submitting data).
 *
 * The callback receives two objects:
 *   - req  (request)  — contains everything the client sent (headers,
 *                        query parameters, body, etc.)
 *   - res  (response) — provides methods to send a reply back to the client
 */
app.get('/movies', function (req, res) {

  /*
   * This array holds our movie data.
   * Each element is a JavaScript object representing one movie.
   * The data was taken from the OMDb API and reformatted as required:
   *   - Released is in ISO 8601 format (YYYY-MM-DD)
   *   - Runtime is a plain number (minutes), not a string with "min"
   *   - Genres, Directors, Writers, Actors are arrays instead of
   *     comma-separated strings — arrays are easier to loop over in JS
   *   - Metascore and imdbRating are numbers, not strings
   */
  const movies = [
    {
      "Title": "The Thing",
      "Released": "1982-06-25",
      "Runtime": 109,
      "Genres": ["Horror", "Mystery", "Sci-Fi"],
      "Directors": ["John Carpenter"],
      "Writers": ["Bill Lancaster", "John W. Campbell Jr."],
      "Actors": ["Kurt Russell", "Wilford Brimley", "Keith David"],
      "Plot": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "Metascore": 57,
      "imdbRating": 8.2
    },
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Released": "1977-05-25",
      "Runtime": 121,
      "Genres": ["Action", "Adventure", "Fantasy"],
      "Directors": ["George Lucas"],
      "Writers": ["George Lucas"],
      "Actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 92,
      "imdbRating": 8.6
    },
    {
      "Title": "Guardians of the Galaxy Vol. 2",
      "Released": "2017-05-05",
      "Runtime": 136,
      "Genres": ["Action", "Adventure", "Comedy"],
      "Directors": ["James Gunn"],
      "Writers": ["James Gunn", "Dan Abnett", "Andy Lanning"],
      "Actors": ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
      "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      "Metascore": 67,
      "imdbRating": 7.6
    }
  ]

  /*
   * res.json() serializes the JavaScript array into a JSON string and
   * sends it back to the client. It also automatically sets the
   * Content-Type response header to 'application/json', which tells
   * the browser that the response body is JSON — not plain text or HTML.
   */
  res.json(movies)
})


app.listen(3000)

console.log("Server now listening on http://localhost:3000/")
