const mongoose = require('mongoose');




// Tolman Skiffs
const TolmanSkiffSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        require: [ true, "You must have an owner name" ],
        minLength: [ 3, "Your owner name must be at least 3 characters long"],
    },
    builderName: {
        type: String,
        require: [ true, "You must have a builder name" ],
        minLength: [ 3, "Your builder name must be at least 3 characters long"],
    },
    //modelName: String dropdown list
    //standard is default value
    modelName: {
        type: String,
        require: [ true, "You must have an model name" ],
        enum: [ 'Standard', 'Wide Body', 'Jumbo', 'Flat Bottom' ],
    },
    //no later than today
    //no earlier than 1990
    startDate: {
        type: Date,
        required: [true, "You must include a start date"],
        min: ['1990-01-01', "Sorry, you cannot build a boat before the plans were created - please try again! : )"],
        max: [ new Date(),  "You cannot say you are starting in the future"],
    },
    finishDate: {
        type: Date,
        min: ['1990-01-01', "Sorry, you cannot finish a boat before the plans were created - please try again! : )"],
        max: [ new Date(),  "You cannot say you are starting in the future"],
    },
    buildComplete: {
        type: Boolean,
        default: false,
    },
    stockLength: {
        type: Number,
        // required: [ true, "Your boat must have a stock length"],
        min: [15, "Minimum length for a Tolman Skiff must be at least 15 feet" ],
        max: [30, "Maximum length for a Tolman Skiff is 30 feet on this site"  ],
    },
    customLength: {
        type: Number,
        required: [ true, "Your boat must have a custom length"],
        min: [15, "Minimum length for a Tolman Skiff must be at least 15 feet" ],
        max: [30, "Maximum length for a Tolman Skiff is 30 feet on this site"  ],
    },
    //optional
    pictureUrl: {
        type: String,
    },

}, { timestamps: true })
//collection names are all lower case and plural based on this string 'Skiff'
module.exports = mongoose.model('Skiff', TolmanSkiffSchema);