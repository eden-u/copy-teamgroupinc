import { ref } from 'vue'

const playIndexRef = ref(-1)

function enterAnimeBtn(animeBtnIndex) {
  playIndexRef.value = animeBtnIndex
}

function leaveAnimeBtn() {
  playIndexRef.value = -1
}

function checkPalyState(animeBtnIndex) {
  return animeBtnIndex === playIndexRef.value
}

export { enterAnimeBtn, leaveAnimeBtn, checkPalyState }
