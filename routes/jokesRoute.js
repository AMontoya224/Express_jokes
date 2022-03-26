const express = require( 'express' );
const JokesRouter = express.Router();
const JokesController = require( './../controllers/jokesController' );


JokesRouter.get( '/', JokesController.JokesFind );

JokesRouter.get( '/random', JokesController.JokesFindRandom );

JokesRouter.get( '/:_id', JokesController.JokesFindID );

JokesRouter.post( '/new', JokesController.JokesInsert );

JokesRouter.put( '/update/:_id', JokesController.JokesUpdate );

JokesRouter.delete( '/delete/:_id', JokesController.JokesDelete );

module.exports = JokesRouter;