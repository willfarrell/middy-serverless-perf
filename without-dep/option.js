const middy = require('./middy')

// Start Global

//End Global

const handler = middy((event, context) => ({}))
	.use((opts) => {
		// Start Option
		const RDS = require('aws-sdk').RDS
		//End Option
		return {
			before: (handler, next) => {
				// Start Function

				//End Function
				next()
			}
		}
	})



module.exports = {handler}