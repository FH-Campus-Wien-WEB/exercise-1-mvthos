const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
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
    {"Title":"Guardians of the Galaxy Vol. 2",
      "Released":"05 May 2017",
      "Runtime":"136 min",
      "Genre":"Action, Adventure, Comedy",
      "Director":"James Gunn",
      "Writer":"James Gunn, Dan Abnett, Andy Lanning",
      "Actors":"Chris Pratt, Zoe Saldaña, Dave Bautista",
      "Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":"67",
      "imdbRating":"7.6",
    },
    {
      "Title": "Inception",
      "Released": "2010-07-16",
      "Runtime": 148,
      "Genres": ["Action", "Adventure", "Sci-Fi"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Christopher Nolan"],
      "Actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": 74,
      "imdbRating": 8.8
    }
  ]
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

