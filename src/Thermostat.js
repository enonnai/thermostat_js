function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
}


Thermostat.prototype.getTemperature = function () {
return this.temperature;
};

Thermostat.prototype.up = function () {
    return this.temperature +=1;
};

Thermostat.prototype.down = function () {
  return this.temperature -= 1;
};

Thermostat.prototype.minTemperature = function() {
  return this.temperature = this.MINIMUM_TEMPERATURE;
}
