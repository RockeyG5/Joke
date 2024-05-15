const buttonOne = document.querySelector(".joke-container button");
const textBox = document.querySelector(".joke-container p");
console.log("The console prints this");

buttonOne.addEventListener('click',getjoke);

async function getjoke(){
    const jokeData=await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept':'application/json'
        }
    });

const jokeObj= await jokeData.json();
textBox.innerHTML = jokeObj.joke;
};
