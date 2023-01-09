function scuberGreetingForFeet(sample){
  if(sample <= 400)
  return "This one is on me!"
  else if(sample >400 && sample <=2000){
    return "That will be twenty bucks."
  }
  else if(sample > 2000 && sample <= 2500) {
    return "I will gladly take your thirty bucks." 
  }
  else {
    return "No can do."
  }
  }
  // Write your code here!


function ternaryCheckCity(city){
  if(city === "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous" :
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default : 
    return "Bye."
  }

  // Write your code here!
}