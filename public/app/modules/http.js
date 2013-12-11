/**
 * Created by marnel on 12/10/13.
 */
define(['plugins/http', 'jquery', 'knockout'], function(durandalHttp, $, ko ) {

    var ajaxSettings = {
        url: url,
        data: ko.toJSON(data),
        contentType: 'application/json',
        dataType: 'json'
    };
    var http = {
        put: function( url, data ) {
            return $.ajax(
                $.extend(ajaxSettings, {type: 'PUT'})
            );
        },
        delete: function( url, data ) {
            return $.ajax(
                $.extend(ajaxSettings, {type: 'DELETE'})
            );
        }
    };


    return  $.extend(true, {}, durandalHttp, http);
});
