module.exports={
	get:function (url,callback) {
		fetch(url,{
		  	method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Origin':'http://localhost',
				'Authorization':'Basic Z3Vlc3Q6Z3Vlc3Q='
			}
		})
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			callback&&callback(responseJson);
		})
		.catch((error) => {
			console.warn(error);
		});
	},
	post:function (url,data,callback) {
		fetch(url,{
		  	method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Origin':'http://localhost',
				'Content-Type': 'application/json',
				'Authorization':'Basic Z3Vlc3Q6Z3Vlc3Q='
			},
			body: data
		})
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {		
			callback&&callback(responseJson);
		})
		.catch((error) => {
			console.warn(error);
		});
	},
	getAvg:function(c1, data, i) {
        var v = 0;
        if (i >= c1) {
            var n = 0;
            for (j = 0; j < c1; j++) {
                n += data[i - j][2];
            }
            v = n / c1;
            return v;
        } else {
            return data[i][2];
        }
	}
};