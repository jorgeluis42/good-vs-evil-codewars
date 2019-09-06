function goodVsEvil(good, evil){
    let good1 = good.split(" ")
   let evil1 = evil.split(" ")
    let good3 = [1,2,3,3,4,10]
    let evil3 = [1,2,2,2,3,5,10]
    let good4= 0
    let evil4 = 0
    let goodscore = 0
    let evilscore =0
    
    for(let i = 0; i < good1.length; i++){
   good4 = good1[i] * good3[i];
   goodscore += good4
      }
    console.log(goodscore)
   for( let j = 0; j < evil1.length; j++){
   evil4 = evil1[j] * evil3[j]
   evilscore += evil4
    }
    if ( goodscore > evilscore) {
    return "Battle Result: Good triumphs over Evil"
    } else if(evilscore > goodscore) {
    return "Battle Result: Evil eradicates all trace of Good"
    } else {
    return "Battle Result: No victor on this battle field"
    
   }}