const middy = require('./middy')

// Start Global
const RDS = require('aws-sdk').RDS
//End Global

const handler = middy((event, context) => ({}))
	.use((opts) => {
		// Start Option

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