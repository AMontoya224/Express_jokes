const mongoose = require( 'mongoose' );


const JokeSchema = new mongoose.Schema(
    {
        setup : {
            type : String,
            required : [true, 'The setup is required' ],
            minlength : [10, 'The setup must be at least 10 characters long']
        },
        punchline : {
            type : String,
            unique : true,
            required : true
        }
    },
    {
        timestamps : true
    }
);

const Jokes = mongoose.model( 'jokes', JokeSchema );

module.exports = Jokes;