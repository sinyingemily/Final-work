const http = require('http')
const r = require('./route')

console.log('Not Connected1')

http.createServer(async function(req, resp, context) {
  resp.setHeader('content-type', 'application/json')
  let uri = (req.url).split('/')
  let uriAdd = (req.url).split('/add/')
  if (uri.length == 0) {
    //  resp.end(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ''))

    resp.writeHead(400, { 'Content-Type': 'application/json' })
    resp.write('Bad Request')
    resp.end()

    // return resp.status(400).send('Bad Request')      
  } else {
    switch (req.method) {
      //post
      case 'POST':
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        const data = JSON.stringify(r.post(uri))
        console.log(data + '2')
        console.log(r.json + 'try')
        resp.write('adding  ' + (req.url).split('/add/'))
        break
        
       //get
       case 'GET':
      resp.writeHead(200, { 'Content-Type': 'application/json' })
      const itemList = JSON.stringify(r.get(uri))
      resp.write('adding  ' + req.urlAdd)
        break
   //delete
      case 'Delete':
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        const deleteItem = JSON.stringify(r.delete(uri))
       resp.write('deleting  ' + (req.url).split('/delete/'))
      break
        
      default:
        resp.writeHead(400, {
          'Content-Type': 'application/json'
        })
        resp.write('Bad request. This is no good')
        resp.end
        console.log()
    }
  }


}
).listen(5000)


