window.onload = function() { 
    var messages = [];
    var socket = io.connect('http://162.243.20.178:3700');
    var field = document.getElementById("query-input");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("msg-container");
 
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
            	html += '<div class="bs-callout"><div class="avtar"><span class="glyphicon glyphicon-user"></span></div><div class="message-content">';
                html += '<h4>'+(messages[i].username ? messages[i].username : 'Server')+'</h4>';
                html += messages[i].message + '</div></div>';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });
 
    $('#selfsearch-form').on('submit',function(e){
		e.preventDefault();       
        var text = field.value;
        socket.emit('send', { message: text, username: 'Me' });
        $('#query-input').val('');
    });
 
};