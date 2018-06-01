const axios = require ('axios');

module.exports = {
  getMatchs() {
    return axios.get('http://localhost:3004/match')
    .then(response=>
    response.data)
    .catch(error=>console.log(error))
  }
}
