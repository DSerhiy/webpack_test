export default Resource;

function Resource(type, health, maxHealth, distanceReserve, maxDistancePerDay) {
  this.type = type; 
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistancePerDay = maxDistancePerDay;
  this.distanceReserve = distanceReserve;
};

Resource.prototype.isReadyToMove = function(distance) {
  return (this.distanceReserve > distance);
};

Resource.prototype.isReadyToFight = function(damage) {
  return (this.health > damage);
}

Resource.prototype.restoreHealth = function() {
  this.health = this.maxHealth;
}

Resource.prototype.resotreDistance = function() {
  this.distanceReserve = this.maxDistancePerDay;
}

Resource.prototype.clone = function () {
  return new Resource(this.type, this.health, this.maxHealth, this.distanceReserve, this.maxDistancePerDay);
}