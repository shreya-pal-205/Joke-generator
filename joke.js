let btn = document.querySelector(".btn");
let p = document.querySelector("p");

btn.addEventListener("click",()=>{
    getJokes();
})

async function getJokes(){
    let url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    p.innerHTML = data.joke;
}