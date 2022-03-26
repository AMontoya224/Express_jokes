const express = require( 'express' );
require( './config/config' );
const app = express();
const JokesRouter = require( './routes/jokesRoute' );


app.use( express.json() );
app.use( '/api/jokes', JokesRouter );

app.listen( 8080, () => {
    console.log( 'The server is running on port 8080.')
});