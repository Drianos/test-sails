/**
 * ActuatorsController
 *
 * @description :: Server-side logic for managing Users
 *
 */
var net = require('net');

module.exports = {
  turnOnLed : function(req, res)
  {
    var newLigthValue = req.param('intensity')
	console.log('Light On');
    var client = new net.Socket();
    client.connect(23, '192.168.100.177', function() {
    	console.log('Connected');
    	client.write(newLigthValue);
    	client.destroy();
    });

     return res.send('On Led');
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
     return res.send('Off Led');
  }
}
