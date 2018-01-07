const $ = require('jquery')

module.exports = {
    getQuestions : function(category, difficulty){
        return $.ajax({
            url: 'http://localhost:4000/api/v2?category=' + category + '&difficulty=' + difficulty,
            //headers: {  'Access-Control-Allow-Origin': 'http://127.0.0.1:8080' },
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
