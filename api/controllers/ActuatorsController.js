/**
 * ActuatorsController
 *
 * @description :: Server-side logic for managing Users
 *
 */
var net = require('net');

var VirtualSerialPort = require('udp-serial').SerialPort;
var firmata = require('firmata');
var five = require("johnny-five");
var sp = new VirtualSerialPort({
  host: '192.168.0.117' //make sure to change the ip(use 192.168.4.1 if you are using ESP8266 as Access Point)
});

var ioboard = new firmata.Board(sp);
var board = new five.Board({io: ioboard, repl: true});


module.exports = {
  turnOnLed : function(req, res)
  {
    var newLigthValue = req.param('intensity')
	   console.log('Light On');
    /*var client = new net.Socket();
    client.connect(23, '192.168.100.177', function() {
    	console.log('Connected');
    	client.write(newLigthValue);
    	client.destroy();*/

    var write = (message) => {
      this.i2cWrite(0x04, Array.from(message, c => c.charCodeAt(0)));
    };
    this.i2cConfig();
    this.repl.inject({ write });


    var message1 = String.fromCharCode((newLigthValue.charCodeAt(0) -100)* 10);
    var message = String.fromCharCode(11);
    write(message1);
    write(message2);

     //return res.send('On Led');
     return;
  },
  turnOffLed : function(req, res)
  {
    console.log('Light Off');
    var client = new net.Socket();
    client.connect(23, '192.168.100.177', function() {
    	console.log('Connected');
    	client.write('d');
    	client.destroy();
    });
     //return res.send('Off Led');
     return;
  }
}
