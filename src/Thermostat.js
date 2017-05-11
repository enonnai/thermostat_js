function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerOn = true;
  this.DEFAULT_TEMPERATURE = 20;
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
  if (this.temperature == 10) {
    return this.temperature;
  }
  return this.temperature -= 1;
};

Thermostat.prototype.minTemperature = function() {
  return this.MINIMUM_TEMPERATURE;
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

Thermostat.prototype.resetTemperature = function() {
  return this.temperature = 20;

};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) {
    return "low-usage";
  }
  if(this.temperature < 25) {
    return "medium-usage";
  }
    return "high-usage";
};
