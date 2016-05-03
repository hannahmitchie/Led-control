var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

board = new five.Board();



board.on("ready", function() 
  {
      led = new five.Led([2, 5, 6, 9, 10, 11]),
      

      io.sockets.on
        (
          'connection', function (socket) 
            {
              socket.on
                (
                  'click1', function () 
                    {
                      console.log('button1 pressed');
                      led.toggle(2);
                    }
                );

              socket.on
                (
                  
                  'click2', function () 
                    {
                      console.log('button2 pressed');
                      led.toggle(5);
                    }
                );         

              socket.on
                (
                  
                  'click3', function () 
                    {
                      console.log('button3 pressed');
                      led.toggle(6);
                    }
                );


              socket.on
                (
                  
                  'click4', function () 
                    {
                      console.log('button4 pressed');
                      led.toggle(9);
                    }
                );


              socket.on
                (
                  
                  'click5', function () 
                    {
                      
                      console.log('button5 pressed');
                      led.toggle(10);
                    }
                );



              socket.on
                (
                  
                  'click6', function () 
                    {
            
                      console.log('button6 pressed');
                      led.toggle(11);
                    }
                );


            }
        ); 



         }
        ); 
      
    

  