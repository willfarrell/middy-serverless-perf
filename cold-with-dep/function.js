const middy = require('./middy')

// Start Global

//End Global

const middleware = (opts) => {
	// Start Option

	//End Option
	return {
		before: (handler, next) => {
			// Start Function
			const RDS = require('aws-sdk').RDS
			//End Function
			next()
		}
	}
}

const handler = middy( async (event, context) => ({}))
	.use(middleware())



module.exports = {handler}