const { response, request } = require('express');
const playerArray  = require('../mocks/playersArray.json').values;

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const reqHeight = Number(req.params.height);

  // Find the pair of players
  let pairPlayers = [];
  for(let i=0;i<playerArray.length;++i){
    let firstH = Number(playerArray[i].h_in);
    for(let j=i+1;j<playerArray.length;++j){
      let secondH = Number(playerArray[j].h_in);
      if(firstH+secondH===reqHeight){
        pairPlayers.push([playerArray[i], playerArray[j]]);
      }
    }
  }
  if(pairPlayers.length!=0){
    return resp.json({ 
      message: `Found ${pairPlayers.length} couples for ${reqHeight} height (in inch)` ,
      couples: JSON.stringify(pairPlayers),
    });
  }
  else{
    return resp.json({ message: `There is no pair of players that match for height ${reqHeight} (in inch) ` });
  }
  
};

module.exports = { getPairsOfPlayers };
