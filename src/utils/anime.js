function palyAnime(el, timeline, animeOption) {
  el.animate(timeline, animeOption)
}

function stopAllAnime(el, originPathStyle) {
  el.getAnimations().forEach((anime) => {
    anime.cancel()
    el.style = originPathStyle
  })
}

export { palyAnime, stopAllAnime }
