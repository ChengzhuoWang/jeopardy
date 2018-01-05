import $ from 'jquery';

module.exports = {
    currentuser : function(){
        return $.ajax({
            url: "http://localhost:4000/api/auth/currentuser",
            type: 'GET',
            success: function(res) {
                return res
            },
            error: function( jqXhr, textStatus, errorThrown ){
            }
        })
    },
    logon : function (logonParameters){
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
    },
    logout : function(){
        return $.ajax({
            url: "http://localhost:8080/api/auth/logout",
            type: 'GET',
            success: function(res) {
                return res
            },
            error: function( jqXhr, textStatus, errorThrown ){
            }
        })
    },
    createuser : function(signUpParameters){
        return $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/auth/createuser',
            data: JSON.stringify(signUpParameters),
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                return res
            },
            error: function( jqXhr, textStatus, errorThrown ){
            }
        })
    }


}
