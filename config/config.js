const mongoose = require( 'mongoose' );


mongoose.connect( 'mongodb://localhost/jokes_db', {useNewUrlParser: true} )
    .then( () => {
        console.log( 'Connected Database' );
    })
    .catch( err => {
        console.log( 'There was an error connecting to the Database' );
    });

mongoose.connection.on( 'Error', (err) => {
    console.log( 'Mongoose bug: ' + err );
    process.exit( 0 );
});

mongoose.connection.on( 'Disconnected', () => {
    console.log( 'Offline Database' );
});
