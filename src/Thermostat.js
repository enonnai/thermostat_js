function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerOn = true;
}


Thermostat.prototype.getTemperature = function () {
return this.temperature;
};

Thermostat.prototype.up = function () {
  if(this.powerOn === false && this.temperature == 32) {
    return this.temperature
  }
  if (this.powerOn === true && this.temperature == 25) {
    return this.temperature;
  }
    return this.temperature +=1;
};

Thermostat.prototype.down = function () {
  return this.temperature -= 1;
};

Thermostat.prototype.minTemperature = function() {
  return this.temperature = this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerOn;
};

Thermostat.prototype.switchOff = function() {
  this.powerOn = false;
};

Thermostat.prototype.switchOn = function() {
  this.powerOn = true;
};
