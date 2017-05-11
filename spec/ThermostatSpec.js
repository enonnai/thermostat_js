describe("Thermostat", function(){
var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increases the temperature ', function() {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('decreases the temperature', function() {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('displays the minimum temperature', function(){
    expect(thermostat.minTemperature()).toEqual(10);
  });

  it('resets the temperature to defalut value', function(){
      expect(thermostat.resetTemperature()).toEqual(20);
  });

  describe('when the power saving mode is on', function() {
    it('confirms that it is on', function() {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('does not reach beyond 25 degrees when PSM on', function(){
      for(var i=0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('when the power saving mode is off', function() {
    it('confirms that it is off', function() {
      thermostat.switchOff();
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('does not reach beyond 32 degrees when PSM off', function(){
      thermostat.switchOff();
      for(var i=0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('Energy Usage', function() {
    it('shows the low usage', function(){
      for(i=0; i < 3; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('shows the medium usage', function(){
      for(i=0; i < 4; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('shows the high usage', function(){
      for(i=0; i < 5; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

});
