const wordtoguess = document.querySelector('#wordtoguess');
const placetoguess = document.querySelector('#placetoguess');
const points_html = document.querySelector('#points');
const reload = document.querySelector('#reload')

let points = 0;
let word = '';

function getWord()
{   
    
    let word_nr = Math.floor(Math.random()*words.length)
    word = words[word_nr]
    wordtoguess.innerHTML = word;

}

window.onload = getWord()

placetoguess.oninput = ()=>{
    let guessedvalue = placetoguess.value;
    let keyword = wordtoguess.innerHTML;
    
    placetoguess.setAttribute("maxlength", keyword.length);
    
    if(guessedvalue == keyword)
    {
        points++;        
        points_html.innerHTML = points;
        getWord()
        placetoguess.value = ''
    }
}

reload.addEventListener('click' , ()=>{
    getWord()
})