asns
====
Another Simple Notification Server - Or more bluntly a very poor man's Pusher. Ideal for a beginings of a pusher service behind the iron curtain such as in a bank.

### Service Side

Install node.js clone the project and run the script.

    git clone https://github.com/thanos/asns.git
    cd asns
    node server.js

### Reciever Side

Insert the following in your code:

  <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
  <script src="http://code.jquery.com/jquery-1.11.1.js"></script>
  <script>
    var socket = io();
  
    socket.on('your_channel', function(msg){
      //do something like $('#messages').append($('<li>').text(msg));
    });
  </script>

### Sender Side

You can use REST:

    curl -X POST http://127.0.0.1:3000/your_channel/ -d msg='some amazing message'
      
or you can use socket.io's api see: http://socket.io/



