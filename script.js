// https://www.themoviedb.org/settings/api

// trás todos os filmes
// https://developer.themoviedb.org/reference/movie-popular-list

  // endpoint get que trás todos os filmes
  // https://api.themoviedb.org/3/movie/popular

/* const data = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/i2GVEvltEu3BXn5crBSxgKuTaca.jpg",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "id": 614479,
      "original_language": "en",
      "original_title": "Insidious: The Red Door",
      "overview": "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      "popularity": 3512.648,
      "poster_path": "/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg",
      "release_date": "2023-07-05",
      "title": "Insidious: The Red Door",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 520
    },
    {
      "adult": false,
      "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      "genre_ids": [
        35,
        12,
        14
      ],
      "id": 346698,
      "original_language": "en",
      "original_title": "Barbie",
      "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      "popularity": 3303.401,
      "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      "release_date": "2023-07-19",
      "title": "Barbie",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2358
    },
    {
      "adult": false,
      "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 298618,
      "original_language": "en",
      "original_title": "The Flash",
      "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      "popularity": 3041.29,
      "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      "release_date": "2023-06-13",
      "title": "The Flash",
      "video": false,
      "vote_average": 7,
      "vote_count": 2030
    },
    {
      "adult": false,
      "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 667538,
      "original_language": "en",
      "original_title": "Transformers: Rise of the Beasts",
      "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      "popularity": 2877.614,
      "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      "release_date": "2023-06-06",
      "title": "Transformers: Rise of the Beasts",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2345
    },
    {
      "adult": false,
      "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
      "genre_ids": [
        28,
        878,
        27
      ],
      "id": 615656,
      "original_language": "en",
      "original_title": "Meg 2: The Trench",
      "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      "popularity": 2589.493,
      "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      "release_date": "2023-08-02",
      "title": "Meg 2: The Trench",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 118
    },
    {
      "adult": false,
      "backdrop_path": "/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
      "genre_ids": [
        28,
        12,
        53,
        35
      ],
      "id": 457332,
      "original_language": "en",
      "original_title": "Hidden Strike",
      "overview": "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
      "popularity": 2539.15,
      "poster_path": "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
      "release_date": "2023-07-06",
      "title": "Hidden Strike",
      "video": false,
      "vote_average": 7,
      "vote_count": 337
    },
    {
      "adult": false,
      "backdrop_path": "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
      "genre_ids": [
        12,
        10751,
        14,
        10749
      ],
      "id": 447277,
      "original_language": "en",
      "original_title": "The Little Mermaid",
      "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      "popularity": 2293.297,
      "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      "release_date": "2023-05-18",
      "title": "The Little Mermaid",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1414
    },
    {
      "adult": false,
      "backdrop_path": "/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg",
      "genre_ids": [
        16,
        28,
        27
      ],
      "id": 1083862,
      "original_language": "ja",
      "original_title": "バイオハザード：デスアイランド",
      "overview": "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
      "popularity": 1881.476,
      "poster_path": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
      "release_date": "2023-06-22",
      "title": "Resident Evil: Death Island",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 392
    },
    {
      "adult": false,
      "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
      "genre_ids": [
        16,
        10751,
        28,
        14,
        10749
      ],
      "id": 496450,
      "original_language": "fr",
      "original_title": "Miraculous - le film",
      "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
      "popularity": 1866.165,
      "poster_path": "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
      "release_date": "2023-07-05",
      "title": "Miraculous: Ladybug & Cat Noir, The Movie",
      "video": false,
      "vote_average": 8,
      "vote_count": 312
    },
    {
      "adult": false,
      "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 447365,
      "original_language": "en",
      "original_title": "Guardians of the Galaxy Vol. 3",
      "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      "popularity": 1700.696,
      "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "release_date": "2023-05-03",
      "title": "Guardians of the Galaxy Vol. 3",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 3911
    },
    {
      "adult": false,
      "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 385687,
      "original_language": "en",
      "original_title": "Fast X",
      "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      "popularity": 1624.529,
      "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      "release_date": "2023-05-17",
      "title": "Fast X",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 3131
    },
    {
      "adult": false,
      "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
      "genre_ids": [
        16,
        10751,
        14,
        35
      ],
      "id": 1040148,
      "original_language": "en",
      "original_title": "Ruby Gillman, Teenage Kraken",
      "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      "popularity": 1522.447,
      "poster_path": "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
      "release_date": "2023-06-28",
      "title": "Ruby Gillman, Teenage Kraken",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 418
    },
    {
      "adult": false,
      "backdrop_path": "/iJ0UZaC7XW7BUpRQ7OLPZSms8Ou.jpg",
      "genre_ids": [
        28,
        878,
        53
      ],
      "id": 813477,
      "original_language": "ja",
      "original_title": "シン・仮面ライダー",
      "overview": "A man forced to bear power and stripped of humanity. A woman skeptical of happiness. Takeshi Hongo, an Augmentation made by SHOCKER, and Ruriko Midorikawa, a rebel of the organization, escape while fighting off assassins. What’s justice? What’s evil? Will this violence end? Despite his power, Hongo tries to remain human. Along with freedom, Ruriko has regained a heart. What paths will they choose?",
      "popularity": 1506.196,
      "poster_path": "/9dTO2RygcDT0cQkawABw4QkDegN.jpg",
      "release_date": "2023-03-17",
      "title": "Shin Kamen Rider",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 87
    },
    {
      "adult": false,
      "backdrop_path": "/kIMYSzp1fH1H9adKplekLD9BuNi.jpg",
      "genre_ids": [
        16,
        28,
        878
      ],
      "id": 1003581,
      "original_language": "en",
      "original_title": "Justice League: Warworld",
      "overview": "Until now, the Justice League has been a loose association of superpowered individuals. But when they are swept away to Warworld, a place of unending brutal gladiatorial combat, Batman, Superman, Wonder Woman and the others must somehow unite to form an unbeatable resistance able to lead an entire planet to freedom.",
      "popularity": 1380.964,
      "poster_path": "/qmevjlNDaWoEughGlXFWHbQ4TaR.jpg",
      "release_date": "2023-07-25",
      "title": "Justice League: Warworld",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 91
    },
    {
      "adult": false,
      "backdrop_path": "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        14
      ],
      "id": 459003,
      "original_language": "uk",
      "original_title": "Мавка: Лісова пісня",
      "overview": "Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.",
      "popularity": 1378.503,
      "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
      "release_date": "2023-03-02",
      "title": "Mavka: The Forest Song",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 243
    },
    {
      "adult": false,
      "backdrop_path": "/r2V2JoK1Crihq3ZHCKp0NlDvr02.jpg",
      "genre_ids": [
        16,
        28,
        12,
        35,
        878
      ],
      "id": 828898,
      "original_language": "en",
      "original_title": "The Venture Bros.: Radiant is the Blood of the Baboon Heart",
      "overview": "A nationwide manhunt for Hank Venture leads to untold dangers and unexpected revelations, while The Monarch is literally out for Dr Venture's blood. An imposing evil from the past reemerges to wreak havoc on the Ventures, The Guild, and even the Monarch marriage—it will take friends and foes alike to restore the Ventures' world to order… or end it once and for all.",
      "popularity": 1159.927,
      "poster_path": "/lLXFw6ZylfMf8pKAzAmVc3qDaPW.jpg",
      "release_date": "2023-07-21",
      "title": "The Venture Bros.: Radiant is the Blood of the Baboon Heart",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 18
    },
    {
      "adult": false,
      "backdrop_path": "/J0XkW5toJLGEucm1pLDvTHXaKC.jpg",
      "genre_ids": [
        28,
        18,
        10752
      ],
      "id": 1076487,
      "original_language": "en",
      "original_title": "Warhorse One",
      "overview": "A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.",
      "popularity": 1108.137,
      "poster_path": "/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg",
      "release_date": "2023-06-30",
      "title": "Warhorse One",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 118
    },
    {
      "adult": false,
      "backdrop_path": "/r54HQwvisSXMfip7oJNhPSWyCK5.jpg",
      "genre_ids": [
        28,
        12,
        10752
      ],
      "id": 1061181,
      "original_language": "ja",
      "original_title": "キングダム 運命の炎",
      "overview": "It follows Li Xin and Wang Qi as they stand on the battlefield for the first time to fight off an invasion by Zhao, and it also follows Ying Zheng's unknown past.",
      "popularity": 1029.717,
      "poster_path": "/50WLieQSV6WSPoNjhf0GabbOeey.jpg",
      "release_date": "2023-07-28",
      "title": "Kingdom 3: The Flame of Fate",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 16
    },
    {
      "adult": false,
      "backdrop_path": "/uN005iCKRR900Xhx0HEvU4MbYN1.jpg",
      "genre_ids": [
        28,
        878,
        27
      ],
      "id": 345940,
      "original_language": "en",
      "original_title": "The Meg",
      "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
      "popularity": 1008.616,
      "poster_path": "/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg",
      "release_date": "2018-08-09",
      "title": "The Meg",
      "video": false,
      "vote_average": 6.2,
      "vote_count": 6692
    },
    {
      "adult": false,
      "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        14,
        35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 979.036,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 6078
    }
  ],
  "total_pages": 39437,
  "total_results": 788735
} */

async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  };

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
  /* const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  }; */
  
  /* try {
    const data = await fetch(`https://api.themoviedb.org/3/tv/${id}`, options)
      .then(response => response.json())
    return data
  } catch (error) {
    console.log(error)
  } */


  /* const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg4M2FlODRiNTM4NmQ3N2JlZjgwOGE3OGRhMDY1ZSIsInN1YiI6IjY0Y2VhYjFjODUwOTBmMDE0NDViMzM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iHuBSxyNR9o9KW9dG9y8ZUCf30moFz_NxrwLwEx294'
    }
  };

  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
    return data
  } catch (error) {
    console.log(error)
  } */

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
  // const results = data.results
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