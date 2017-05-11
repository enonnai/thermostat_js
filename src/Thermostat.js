function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerOn = true;
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
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this.powerOn;
};

Thermostat.prototype.isPowerSavingOff = function () {
  return this.powerOff = false;
};
