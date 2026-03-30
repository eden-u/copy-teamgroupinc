import { ref } from 'vue'

const animeCloseClrRef = ref('')

function enterAnimeClose(clr) {
  animeCloseClrRef.value = clr
}

function leaveAnimeClose(clr) {
  animeCloseClrRef.value = clr
}

export { animeCloseClrRef, enterAnimeClose, leaveAnimeClose }
