function scuberGreetingForFeet(value) {
  if (value <= 400 ) {
  return 'This one is on me!'
}
  else if (value > 400 && value <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (value > 2000 && value <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else (value > 2500)  
    return 'No can do.'
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else (city !== 'NYC') 
    return 'No go.' 
}
const tip = 'generous'
function switchOnCharmFromTip(tip) {
switch (tip) {
  case 'generous':
  return 'Thank you so much.';
  case 'not as generous': 
  return 'Thank you.';
  default:
    return 'Bye.';
}
}

