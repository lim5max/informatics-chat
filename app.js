
const net = require('net');


let client = new net.Socket()




//


/*let http = require('http').createServer(app)
const io = require('socket.io')(http);

const router = new express.Router();
let online_users = 0;
*/

client.connect(54540, '3.15.32.243', function(){
  console.log('connected')
})

/*
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname+'/templates/' );
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('index', {page_name: "Main page"})
})
app.post('/', (req, res)=>{
  res.redirect('/create_room')
})
*/

/*io.on("connection", (socket)=>{
  console.log("user connected to the server")
  online_users++;
  socket.on("disconnect", ()=>{
    online_users--
    io.sockets.emit("broadcast", {num_users: online_users})
    console.log('user leave from the serv')

  })
  
  io.sockets.emit("broadcast", {num_users: online_users})

  
})
port = 3030
http.listen(port, ()=>{
    console.log(`server running, https://localhost:${port}`)
})
*/
