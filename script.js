// para trazer todos os filmes
// https://developer.themoviedb.org/reference/movie-popular-list

  // endpoint get que trás todos os filmes
  // https://api.themoviedb.org/3/movie/popular


async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  }

  try {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

// buscar informações sobre um filme 
// https://api.themoviedb.org/3/movie/{movie_id}
async function getMoreInfo(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  };

  try {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

// quando clicar no botao de trailer
// https://api.themoviedb.org/3/movie/{movie_id}/videos
async function watch(e) {
  const movie_id = e.currentTarget.dataset.id

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  };

  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
      .then(response => response.json())

    const { results } = data

    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')
  } catch (error) {
    console.log(error)
  }
}

function createMovieLayout({
    id,
    title,
    stars,
    image,
    time,
    year
}) {
  return `
  <div class="movie">
      <div class="title">
          <span>${title}</span>
          <div>
              <img src="./assets/icons/Star.svg" alt="">
              <p>${stars}</p>
          </div>
      </div>

      <div class="poster">
          <img src="https://image.tmdb.org/t/p/w500/${image}" alt="Imagem de ${title}">
      </div>

      <div class="info">
          <div class="duration">
              <img src="./assets/icons/Clock.svg" alt="">
              <span>${time}</span>
          </div>

          <div class="year">
              <img src="./assets/icons/CalendarBlank.svg" alt="">
              <span>${year}</span>
          </div>
      </div>

      <button onclick="watch(event)" data-id="${id}">
          <img src="./assets/icons/Play.svg" alt="">
          <span>Assistir trailer</span>
      </button>
  </div>
  `
}

function select3Videos(results) {
  const random = () => Math.floor(Math.random() * results.length)

  let selectedVideos = new Set()
  while(selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id)
  }

  return [...selectedVideos]
}

function minutesToHourMinutesAndSeconds(minutes) {
  const date = new Date()
  date.setMinutes(minutes)
  return date.toISOString().slice(11, 19) 
}

async function start() {
  // pega as sugestões de filmes da API
  const { results } = await getMovies()

  const best3 = select3Videos(results).map(async movie => {
    // pegar informações dos 3 filmes
    const info = await getMoreInfo(movie)
    
    // organizar os dados 
    const props = {
      id: info.id,
      title: info.title,
      stars: Number(info.vote_average).toFixed(1),
      image: info.poster_path,
      time: minutesToHourMinutesAndSeconds(info.runtime),
      year: info.release_date.slice(0, 4)
    }

    return createMovieLayout(props)
  })

  const output = await Promise.all(best3)

  document.querySelector('.movies').innerHTML = output.join('')
}

start()