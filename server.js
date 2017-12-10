const connect = require( 'connect' ),
		serveStatic = require( 'serve-static' );

connect()
		.use( serveStatic( '.' ) )
		.listen( process.env.PORT, process.env.IP, () => {
			console.log( 'Server running on Cloud9 IDE env Port. \nIf you were expecting to see port 3000, you need to edit server.js.' );
		} );