var mongoose =require('mongoose');
var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;
var userSchema = new Schema({
    Id : ObjectId,
    userName : String,
    password : String,
    emailAddress : String,
    dateJoin : Date
});

userSchema.methods.findUserName = function(cb){
    return this.model('User').find({userName: this.userName},cb)
};

var User = mongoose.model('User',userSchema);

function createUser(userName, password,emailAddress){
    return new User({userName: userName,
                     password:password,
                     emailAddress:emailAddress,
                     dateJoin: new Date.now()});

}