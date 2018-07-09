var should = require('should');
var User = require('../models/user');
describe('User', function () {
  describe('defaults', function () {

    var user = {};

    before(async () => {
      user = new User({email: 'anu@gmail.com'});
    });

    it('email is anu@gmail.com', function(){
      user.email.should.equal('anu@gmail.com');
    });
    it('has an authentication token', function(){
      user.authenticationToken.should.be.defined;
    });
    it('has a pending status', function(){
      user.status.should.equal('pending');
    });
    it('has a created date', function(){
      user.createdAt.should.be.defined;
    });
    it('has a signInCount of 0', function(){
      user.signInCount.should.equal(0);
    });
    it('has lastLogin', function(){
      user.lastLoginAt.should.be.defined;
    });
    it('has currentLogin', function(){
      user.currentLoginAt.should.be.defined;
    });
    // it('has a sessionToken', function(){
    //   user.currentSessionToken.should.be.equal(null);
    // });
    // it('has a reminderToken', function(){
    //   user.reminderToken.should.equal(null);
    // });
    // it('has a reminder sent date',function(){
    //   user.reminderSentAt.should.equal(null);
    // });
  });
});
