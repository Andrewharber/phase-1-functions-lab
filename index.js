function distanceFromHqInBlocks(a) {
   // if (a > 42) 
   // return a - 42 
   // else (42 < a)
   // return 42 - a
   return Math.abs(42 - a)
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(distance) {
   return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
   return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
   const distanceT = distanceTravelledInFeet(start,destination)
   if (distanceT <= 400) 
   return 0;
   else if (distanceT >= 401 && distanceT <=2000)
   return (distanceT - 400) * .02;
   else if (distanceT <= 2500 && distanceT >= 2001)
   return 25;
   else if (distanceT >= 2501)
   return "cannot travel that far"
}