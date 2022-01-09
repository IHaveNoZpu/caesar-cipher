function caesarCipher(text, shift, d) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

  text = text.slice("")
  shift = shift % 26

  if (d) {
    shift = shift * -1
  }

  let res = ""

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const upper = (char == char.toUpperCase())
    if (alphabet.indexOf(char.toLowerCase()) >-1) {
      const charIndex = alphabet.indexOf(char.toLowerCase())
      const charIndexWithShift = charIndex + shift
      console.log(charIndexWithShift)

      if (alphabet[charIndexWithShift]) {
        res += upper ? alphabet[charIndexWithShift].toUpperCase() : alphabet[charIndexWithShift]
      } else if (alphabet[charIndexWithShift - 26]) {
        res += upper ? alphabet[charIndexWithShift - 26].toUpperCase() : alphabet[charIndexWithShift - 26]
      } else {
        res += upper ? alphabet[26 + charIndexWithShift].toUpperCase() : alphabet[26 + charIndexWithShift]
      }
    } else {
      res += char
    }
  }

  return res
}

function onEncrypt() {
  const text = document.querySelector("#text").value;
  const shift = document.querySelector("#shift").value;
  // const useBruteforce = document.querySelector("#bf").checked;

  document.querySelector("#output").value = caesarCipher(text, shift)
}

function onDecrypt() {
  const text = document.querySelector("#text").value;
  const shift = document.querySelector("#shift").value;
  // const useBruteforce = document.querySelector("#bf").checked;

  document.querySelector("#output").value = caesarCipher(text, shift, true)
}