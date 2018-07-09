var auth = module.exports = {
    authList: [],
    md5: require("blueimp-md5"),
    authCode: '885d465e5cdf58b2c61384c4d06',
    secret: 'q1w3e5r7t8y',
    encrypt: function(key) {
        return auth.md5(key + auth.secret)
    },
    getSecret: function(key) {
      return auth.md5(key + auth.secret)
    },
    addList: function(code) {
        auth.authList.push(code);
    },
    clearAuthList: setInterval(function(){
        auth.authList = [];
    },1000*60*30)

};