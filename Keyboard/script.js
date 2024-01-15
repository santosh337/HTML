

window.addEventListener('keydown', function (e) {
    console.log(e.key);
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;

let ascii = e.key.charCodeAt(0);
    let number = document.getElementById("number");
    number.innerText = `${ascii}`;
  }, false);