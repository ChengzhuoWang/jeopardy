const $ = require('jquery')

module.exports = {
    getQuestions : function(category, difficulty){
        var apiURL = null;
        if(location.hostname == 'localhost'){
            apiURL = 'http://' + location.host;
        }
        else{
            apiURL = 'https://' + location.hostname;
        }
        return $.ajax({
            url: apiURL +'/api/v2?category=' + category + '&difficulty=' + difficulty,
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(res) {
                return res;
            },
            error: function( jqXhr, textStatus, errorThrown ){
            }
        })
    },
    addQuestions : function (set){
        return $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/auth/logon',
            data: JSON.stringify(logonParameters),
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                return res
            },
            error: function( jqXhr, textStatus, errorThrown ){
            }
        })
    }
}
