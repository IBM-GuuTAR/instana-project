import warningSound from "../assets/sound/warning.mp3"
import errorSound from "../assets/sound/error.mp3"

export const playWarningSound = () => {
  new Audio(warningSound).play().catch((err) => console.log(err))
}

export const playErrorSound = () => {
  new Audio(errorSound).play().catch((err) => console.log(err))
}
