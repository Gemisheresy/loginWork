module.exports = function(app) {
    // data base set up on local host called users
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/user');
    var db = mongoose.connection;
    var Schema = mongoose.Schema;
    var userSchema = new Schema({
        userName: 'String',
        password: 'String',
        emailAddress: 'String'

    });
    // methods going to put on the schema for user so that middleware can check to see if user exist or not
    /*
     app.userSchema.methods.findUserName = function(cb){
     return this.model('User').find({userName: this.userName},cb)
     };
     app.userSchema.methods.checkPassword = function(cb,password){
     return this.model('User').find({password: this.password},cd)

     };
     app.validatePassword = function(cbPassword, passwordEntered, callback){
     if (cbPassword == passwordEntered ){
     callback()
     }
     else {
     throw "Password entered does not match"
     }
     };
     */
    app.User = mongoose.model('User', userSchema);


    // set to show when the data base has been connected
    db.on('open',function(err){
        if(err){ return console.log(err)}
        console.log("connected");

    })


    var createUser = function (userName, password, emailAddress) {
        return new app.User({
            userName: userName,
            password: password,
            emailAddress: emailAddress
        });

    }
    // given to main app so app can call saveUser function while calling createUser for quick model building
    app.saveUser = function (userName, password, emailAddress) {

        db.on('error', console.error.bind(console, 'connection error:'));
            var User = createUser(userName, password, emailAddress);
            User.save(function (error, User) {
                if (error) {
                    return console.log(error);
                }
                console.log("User was saved");
            })
        db.on('close',function(){
            db.disconnect();
            console.log('database closed')
        })

    };
    // test to see if methods will save to database
    // saveUser('gemin','hex','gemisheresy@gmail.com')
};