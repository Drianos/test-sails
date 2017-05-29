/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 *
 */

module.exports = {
  updatePirValue : function(req, res)
  {
    var sensorId = req.param('id');
    var sensorValue = req.param('value');
    console.log('Pir sensor ' + sensorId + 'changed to ' + sensorValue );
  },
  /*pir2 : function(req, res)
  {
     return res.send('Hi there!, I\'m sensor PIR # 2');
  }*/
}
