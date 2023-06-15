// let main = document.querySelector(".main");
// fetch("https://api.adviceslip.com/advice", { method: "GET" })
//   .then((data) => data.json())
//   .then((el) => console.log(el));

let main = document.querySelector(".main");

function x() {
  fetch("https://api.adviceslip.com/advice", { method: "GET" })
    .then((data) => data.json())
    .then((el) => {
      main.innerHTML = `<br />
        <h5>ADVICE #${el.slip.id}</h5>
        <q>${el.slip.advice}</q><br /><br />
        <img class="imgdesktop" src="./images/pattern-divider-desktop.svg"><img class="imgmobile" src="./images/pattern-divider-mobile.svg"><br />
        <button onClick="x()"><img src="./images/icon-dice.svg"></button>  
      `;
    });
}
x();
