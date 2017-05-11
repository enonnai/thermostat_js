$(document).ready(function() {
  var thermostat = new Thermostat();
   updateTemperature();

$('#temperature-up').click(function() {
  thermostat.up();
   updateTemperature();
});

$('#temperature-down').click(function() {
  thermostat.down();
   updateTemperature();
});

$('#temperature-reset').click(function() {
   thermostat.resetTemperature();
   updateTemperature();
 });

 $('#power-saving-on').click(function() {
    thermostat.switchOn();
    updateTemperature();
  });

  $('#power-saving-off').click(function() {
     thermostat.switchOff();
     updateTemperature();
   });

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

});
