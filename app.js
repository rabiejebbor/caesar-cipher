const input = document.getElementById("input");
const number = document.getElementById("number");
const encryptBtn = document.getElementById("encryptBtn");
const incOutput = document.getElementById("incOutput");

const decrInput = document.getElementById("decrInput");
const decryptBtn = document.getElementById("decryptBtn");
const decrOutput = document.getElementById("decrOutput");
const number2 = document.getElementById("number2");

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
  "z",
];

encryptBtn.onclick = () => {
  function shiftCharacter(char, number) {
    if (char === " ") return " ";
    const charIndex = alphabet.findIndex((letter) => char === letter);
    console.log(number, "charIndex", charIndex);
    if (charIndex !== -1 && charIndex + number <= 25)
      return alphabet[charIndex + number];
    else if (charIndex !== -1 && charIndex + number > 25)
      return alphabet[charIndex + number - 26];
    else return ".";
  }

  const text = input.value;
  const encryptedText = text
    .toLowerCase()
    .split("")
    .map((e) => shiftCharacter(e, Number(number.value)))
    .join("");
  incOutput.innerHTML = `<h3>Encrypted text: </h3><p>${encryptedText}</p> `;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// decryption

decryptBtn.onclick = () => {
  function unShiftCharacter(char, number) {
    if (char === " ") return " ";
    const charIndex = alphabet.findIndex((letter) => char === letter);
    console.log(number, "charIndex", charIndex);
    if (charIndex !== -1 && charIndex - number >= 0)
      return alphabet[charIndex - number];
    else if (charIndex !== -1 && charIndex - number < 0)
      return alphabet[charIndex - number + 26];
    else return ".";
  }

  const text = decrInput.value;
  const decryptedText = text
    .split("")
    .map((e) => unShiftCharacter(e, Number(number2.value)))
    .join("");
  decrOutput.innerHTML = `<h3>Decrypted text: </h3><p>${decryptedText}</p>`;
};
