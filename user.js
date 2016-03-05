module.exports = function (app) {
    var mongoose =require('mongoose');
    mongoose.connect('mongodb://localhost:27017/users');
    var db = mongoose.connection;

    var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
    var userSchema = new Schema({
        Id : ObjectId,
        userName : String,
        password : String,
        emailAddress : String

    });

    userSchema.methods.findUserName = function(cb){
        return this.model('User').find({userName: this.userName},cb)
    };
    userSchema.methods.checkPassword = function(cb,password){
        return this.model('User').find({password: this.password},cd)

    };
    var validatePassword = function(cbPassword, passwordEntered, callback){
        if (cbPassword == passwordEntered ){
            callback()
        }
        else {
            throw "Password entered does not match"
        }
    }

    var User = mongoose.model('User',userSchema);


    app.createUser = function(userName, password,emailAddress){
        return new User({userName: userName,
            password:password,
            emailAddress:emailAddress
        });

    }
    app.saveUser = function(userName,password,emailAddress) {
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            var User = createUser(userName, password, emailAddress);
            User.save(function (err, temp) {
                if (err) return console.error(err);
            });

        });
    }
}

