var axios = require('axios');

module.exports = {
    fetchGame: function() {
        var encodedURI = window.encodeURI('/api/startup');

        return axios.get(encodedURI).then(function (response) {
            return response.data;
        })
    }
};