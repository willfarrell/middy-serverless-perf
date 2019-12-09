const middy = require('./middy')

// Start Global

//End Global

const handler = middy((event, context) => ({}))
	.use((opts) => {
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
	})



module.exports = {handler}