const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", showPassword);
clipboardEl.addEventListener("click", copyPassword);

function copyPassword() {
  const password = resultEl.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("password copied to clipboard");
}

function showPassword() {
  const password = generatePassword();
  resultEl.textContent = password;
}

function generatePassword() {
  const length = lengthEl.value;
  const pattern = randomCharacter();
  let password = "";
  while (password.length < length) {
    password += pattern[Math.floor(Math.random() * pattern.length)];
  }

  return password;
}
console.log(generatePassword());

function randomCharacter() {
  let pattern = "";
  if (uppercaseEl.checked) pattern += "ABCDEFGHIJKLMNOPQRSTVWXYZZ";

  if (lowercaseEl.checked) pattern += "abcdefghijklmnopqrstwvxyzz";

  if (numbersEl.checked) pattern += "0123456789";

  if (symbolsEl.checked) pattern += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

  return pattern;
}

console.log(randomCharacter());
