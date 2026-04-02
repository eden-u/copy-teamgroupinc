function palyAnime(el, anime, animeOption) {
  el.animate(anime, animeOption)
}

function stopAllAnime(el, animePathStyle) {
  el.getAnimations().forEach((anime) => {
    anime.cancel()
  })

  for (const prop in animePathStyle) {
    el.style[prop] = animePathStyle[prop]
  }
}

export { palyAnime, stopAllAnime }
