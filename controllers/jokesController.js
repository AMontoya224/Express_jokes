const Jokes = require( './../models/jokesModel' );


const JokesFind = ( request, response ) => {
    Jokes.find()
        .then( jokesList => {
            return response.status( 200 ).json( jokesList );
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the find.';
            return response.status( 400 ).json( err );
        });
};

const JokesFindID = ( request, response ) => {
    const {_id} = request.params;

    Jokes.findOne( {_id} )
        .then( jokesData => {
            return response.status( 200 ).json( jokesData );
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the findID.';
            return response.status( 400 ).json( err );
        });
};

const JokesFindRandom = ( request, response ) => {
    Jokes.aggregate( [ {$sample: {size: 1}} ] )
        .then( jokesData => {
            return response.status( 200 ).json( jokesData[0] );
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the find.';
            return response.status( 400 ).json( err );
        });
};

const JokesInsert = ( request, response ) => {
    const { setup, punchline } = request.body;
    const JokesNew = {
        setup, punchline
    };

    Jokes.create( JokesNew )
        .then( newData => {
            return response.status( 201 ).json( newData );
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the insert.';
            return response.status( 400 ).json( err );
        });
};

const JokesUpdate = ( request, response ) => {
    const {_id} = request.params;
    const { setup, punchline } = request.body;
    const jokesUpdate = {
        setup, punchline
    };

    Jokes.findOneAndUpdate( {_id}, {$set : jokesUpdate}, {new: true} )
        .then( jokesData => {
            return response.status( 202 ).json( jokesData );
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the update.';
            return response.status( 400 ).json( err );
        })
};

const JokesDelete = ( request, response ) => {
    const {_id} = request.params;

    Jokes.deleteOne( {_id} )
        .then( () => {
            return response.status( 204 ).end();
        })
        .catch( err => {
            response.statusMessage = 'There was an error executing the delete.';
            return response.status( 400 ).json( err );
        })
};

const JokesController = {
    JokesFind,
    JokesFindID,
    JokesFindRandom,
    JokesInsert,
    JokesUpdate,
    JokesDelete
};

module.exports = JokesController;