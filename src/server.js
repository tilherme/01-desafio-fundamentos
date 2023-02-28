import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';
const server = http.createServer(async(req, res) => {
     await json(req, res)

   const { method, url} = req
   // console.log(method, url);
   
    const route = routes.find(route =>{
       return route.method === method && route.path === url
    //   return route.method === method && route.path.test(url)
   })
   console.log(route);
if (route){
    const routeParams = req.url.match(route.path)
    // const { query, ...params } = routeParams.groups

    // req.params = params
    // req.query = query ? extractQueryParams(query) : {}
    return route.handler(req, res)
 }    
  res.writeHead(404).end()
  
})

server.listen(3333)