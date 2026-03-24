const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
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
      "Actors": ["Mark Hamill, Harrison Ford, Carrie Fisher"],
      "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 90,
      "imdbRating": 8.6
    },
    {"Title":"Guardians of the Galaxy Vol. 2",
      "Released":"2017-05-05",
      "Runtime":136 ,
      "Genres":["Action", "Adventure", "Comedy"],
      "Directors":["James Gunn"],
      "Writers":["James Gunn, Dan Abnett, Andy Lanning"],
      "Actors":["Chris Pratt, Zoe Saldaña, Dave Bautista"],
      "Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":67,
      "imdbRating":7.6
    }
  ]
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")