module.exports.awsProfile = () => { return "" }

module.exports.database = () => {
	const response = {
		host: "",
		user: "",
		password: "",
		database: ""
	};
	return JSON.stringify(response);
};

module.exports.restApiId = () => { return "" }

module.exports.restApiRootResourceId = () => { return "" }