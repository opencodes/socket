window.onload = function() { 
    var messages = [];
    var socket = io.connect('http://162.243.20.178');
    var field = document.getElementById("query-input");
    var content = document.getElementById("msg-container");
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
            	if(messages[i].username === $('#username').val()){
            		html += '<li class="media right-align"><a href="#" class="pull-right">';
                	html += '      <img  class="media-object" alt="64x64" style="width: 64px; height: 64px;" src="/img/me.jpg">';
                	html += '    </a>';
                	html += '    <div class="media-body">';
                	html += '      <h4 class="media-heading">'+(messages[i].username ? messages[i].username : 'Server')+'</h4>';
                	html += messages[i].message;
                	html += '    </div>';
                	html += '</li>';
            	}else {
            		html += '<li class="media"><a href="#" class="pull-left">';
                	html += '      <img  class="media-object" alt="64x64" style="width: 64px; height: 64px;" src="/img/you.jpg">';
                	html += '    </a>';
                	html += '    <div class="media-body">';
                	html += '      <h4 class="media-heading">'+(messages[i].username ? messages[i].username : 'Server')+'</h4>';
                	html += messages[i].message;
                	html += '    </div>';
                	html += '</li>';
            	}
           
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });
    if(!$('#username').val()){
    	$('#username').val(window.Date.now());
    }
    $('#selfsearch-form').on('submit',function(e){
		e.preventDefault();       
        var text = field.value;
        socket.emit('send', { message: text, username:$('#username').val() });
        $('#query-input').val('');
        var currentscroll = $(window).scrollTop();
        $(window).scrollTop(currentscroll + $('.bs-callout:last').height());
    });
 
};