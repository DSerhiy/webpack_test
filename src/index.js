import Squad from './squad.js';

const newSquad = new Squad();

newSquad.addResource('Horse', 100, 100, 250, 250);
newSquad.addResource('Soldier', 100, 100, 70, 70);

console.log(newSquad);

console.log(newSquad.squad[0].isReadyToMove(100));
console.log(newSquad.squad[1].isReadyToMove(100));
console.log(newSquad.getReadyToMoveResources(100));
console.log(newSquad.getReadyToMoveResources(100));
console.log(newSquad.getReadyToMoveResources(100));