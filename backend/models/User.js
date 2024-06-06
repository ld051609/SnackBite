const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Snack',
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }]
}, {timestamps: true})

// Hash the password before saving the user
UserSchema.pre('save', async function(next){
    // Check if the password is modified
    if(!this.isModified('password')){
        return next()
    }
    // If password is modified, hash the password
    try {
        // Generate the salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password using generated salt
        this.password = await bcrypt.hash(this.password, salt);
        next();        
    } catch (error) {
        return next(error)
        
    }

})
// Validate the password, return true if the password is correct
UserSchema.methods.validatePassword = async function(password){
    return bcrypt.compare(password, this.password);
}
module.exports = mongoose.model('User', UserSchema)