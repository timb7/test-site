const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/noun-llama-3263829.svg") {
    myImage.setAttribute("src", "images/noun-cat-3263711.svg");
  } else {
    myImage.setAttribute("src", "images/noun-llama-3263829.svg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Llama's are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Llama's is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

