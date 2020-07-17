async function ded(){
  const key = document.querySelector('#key');
  const points_div = document.querySelector('#points');

  let points;
  let Points4572;
  const codes = {

      '97' : 'a',
      '98' : 'b',
      '99' : 'c',
      '100' : 'd',
      '101' : 'e',
      '102' : 'f',
      '103' : 'g',
      '104' : 'h',
      '105' : 'i',
      '106' : 'j',
      '107' : 'k',
      '108' : 'l',
      '109' : 'm',
      '110' : 'n',
      '111' : 'o',
      '112' : 'p',
      '113' : 'q',
      '114' : 'r',
      '115' : 's',
      '116' : 't',
      '117' : 'u',
      '118' : 'v',
      '119' : 'w',
      '120' : 'x',
      '121' : 'y',
      '122' : 'z',

  }

  let keycode;
  let au;
  window.onload = ()=>{
      Points4572=0;
      points = 0;

      Rand_keycode()
  }

  function Rand_keycode()
  {
      keycode = Math.floor(Math.random()*26)+97;

      key.innerHTML = codes[keycode];
      if(au==true) console.log('✅ Puntky: ' + points);
      if(au==false) console.log('🚫 Puntky: ' + points);
      console.log('Litera: ' + codes[keycode])
  }

  window.onkeypress = function(e) {
      if(points==Points4572){
      if (e.keyCode == keycode) {
          Points4572++;
          au=true;
          points++;
          points_div.innerHTML = points;
          Rand_keycode();

      }else{
          au=false;
          points = 0;
          Points4572=0;
          points_div.innerHTML = points;
          Rand_keycode()

      }
    }
    else {
      console.log('🚫 Coś ci nie pykło z tą konsolą')
      points=0;
    }

   }
};
ded();
