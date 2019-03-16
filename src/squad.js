import Resource from './resource.js';
export default Squad; 

function Squad() {
  this.squad = [];
}

Squad.prototype.addResource = function(type, health, maxHealth, distanceReserve, maxDistancePerDay) {
  this.squad.push(new Resource(type, health, maxHealth, distanceReserve, maxDistancePerDay));
}

Squad.prototype.isReadyToMove = function(distance) {
  return this.squad.every((resource) => {
    return resource.isReadyToMove(distance); 
  })
}

Squad.prototype.isReadyToFight = function(damage) {
  return this.squad.every((resource) => {
    return resource.isReadyToFight(damage); 
  })
}

Squad.prototype.restoreHealth = function(index = false) {
  if (index === false)
    this.squad[index].restoreHealth();
  else 
    this.squad.forEach((resource) => {
      resource.restoreHealth();
    })
}

Squad.prototype.restoreDistance = function(index = false) {
  if (index === false)
    this.squad[index].resotreDistance();
  else 
    this.squad.forEach((resource) => {
      resource.restoreDistance();
    })
}
 
Squad.prototype.getReadyToMoveResources = function(distance) {
 return this.squad.filter((resource) => {
    return resource.isReadyToMove(distance);
  })
}

Squad.prototype.combineResources = function(squad) {
  this.squad = this.squad.concat(squad);
}

Squad.prototype.reorderResources = function(index1, index2) {
  const tempResource = this.squad[index1];
  this.squad[index1] = this.squad[index2];
  this.squad[index2] = tempResource;
}

Squad.prototype.cloneResource = function(resource) {
  if(typeof resource === 'number')
    return this.squad[resource].clone();
  
  return resource.clone();  
}


