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

  describe('when the power saving mode is on', function() {
    it('confirms that it is on', function() {
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

  });

  describe('when the power saving mode is off', function() {
    it('confirms that it is off', function() {
      expect(thermostat.isPowerSavingOff()).toBe(false);
    });

  });

});
