/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 *
 */

module.exports = {
  getPir : function(req, res)
  {
     return res.send('Hi there!, I\'m sensor PIR # 1');
     console,log('Getting PIR');
  },
  /*pir2 : function(req, res)
  {
     return res.send('Hi there!, I\'m sensor PIR # 2');
  }*/
}
