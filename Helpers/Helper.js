

module.exports = {
	successResponse: (res, msg,data) => {
		var data = {
			status: 1,
			message: msg,
            data:data
		};
		return res.status(200).json(data);
	},
    errorMessage: (res, msg) => {
		var data = {
			status: 0,
			message: msg
		};
		return res.status(400).json(data);
	},
    ValidationMessage: (res, msg) => {
		var data = {
			status: 1,
			message: msg
		};
		return res.status(200).json(data);
	}
}

