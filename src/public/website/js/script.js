const logo_section = document.getElementById('logo');
const backtotop = document.getElementById('backtotop');
let logo_height = logo_section.offsetHeight;
window.addEventListener('scroll', ()=>{
    if(window.scrollY > logo_height){
        backtotop.style.display = 'block';
        backtotop.style.opacity = 1;
    }else{
        backtotop.style.display = 'none'
        backtotop.style.opacity = 0;
    }
})

let games = [
    {
        "url": "/noobclicker",
        "name": "NoobClicker",
        "screenshot": "noob.png"
    },
    {
        "url": "/jebleb",
        "name": "Jebleb",
        "screenshot": "jebleb.png"
    },
    {
        "url": "/keyguess",
        "name": "KeyGuess",
        "screenshot": "keyguess.png"
    },
    {
        "url": "/wordguess",
        "name": "WordGuess",
        "screenshot": "wordguess.png"
    },
    {
        "url": "/spookygame",
        "name": "Spooky Game",
        "screenshot": "SpookyGame.png"
    },
    {
        "url": "/dinozzz",
        "name": "Dinozzz",
        "screenshot": "Dinozzz.png"
    }
]
let project = [
    {
        "url": "https://github.com/ctrl-team/hcjtemplate",
        "name": "Hcjtemplate",
        "screenshot": "hcjtemplate.png"
    },
    {
        "url": "https://github.com/ctrl-team/CPP-Autoclicker/",
        "name": "CPP autoclicker",
        "screenshot": "autoclicker.png"
    },
    {
        "url": "https://github.com/ctrl-team/BatPaint/",
        "name": "BatPaint",
        "screenshot": "batpiant.png"
    },
    {
        "url": "https://spadaczka.glitch.me/",
        "name": "Spadaczka",
        "screenshot": "spadaczka.png"
    },
    {
        "url": "https://zygurek.glitch.me/",
        "name": "Zygurek",
        "screenshot": "zygurek.png"
    },
    {
        "url": "https://plikojad.glitch.me/",
        "name": "Plikojad",
        "screenshot": "plikojad.png"
    },
]
for (let i = 0; i < games.length; i++) {
    let game = document.createElement("div")
    game.className = "game";
    game.innerHTML = `
          <a target="_blank" href="${games[i]["url"]}">
            <img src="/website/img/${games[i]["screenshot"]}" height="258"></img>
          </a>
          <p><a target="_blank" href="${games[i]["url"]}">${games[i]["name"]}</a></p>
          `
    document.getElementById("games").appendChild(game)
}
for (let i = 0; i < project.length; i++) {
    let projects = document.createElement("div")
    projects.className = "project";
    projects.innerHTML = `
          <a target="_blank" href="${project[i]["url"]}">
            <img src="/website/img/${project[i]["screenshot"]}" height="258"></img>
          </a>
          <p><a target="_blank" href="${project[i]["url"]}">${project[i]["name"]}</a></p>
          `
    document.getElementById("projects").appendChild(projects)
}

backtotop.addEventListener('click', ()=>{
    window.scrollTo(0, 0)
})
