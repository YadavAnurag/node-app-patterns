var Application = function(args){

  var app ={};
  app.email = args.email;
  app.password = args.password;
  app.confirm = args.confirm;
  app.status = 'pending';
  app.message = null;

  app.isValid = function(){
    return app.status = 'Validated';
  };

  app.isInvalid = function(){
    return !isValid();
  }

  app.setInvalid = function(message){
    app.status = 'Invalid';
    app.message = message;
  }

  app.validate = function(message){
    app.status = 'Validated';
  };

  return app;
};

module.exports = Application;
