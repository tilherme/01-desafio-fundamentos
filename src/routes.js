import { randomUUID } from 'node:crypto'
import { Database } from './database.js'

const database = new Database

export const routes = [
  {
    method: 'GET',
        path:( '/task'),
        handler:(req, res) => {
            // console.log(req.query);

            // const {search} = req.query
            // console.log(search);

            const users = database.select('users', {
                // name: search,
                // email: search,

            })
              
            return res.end(JSON.stringify(users))
        }

  },
  {
    method: 'POST',
    path: ('/task'),
    handler:(req, res) => {
      const {name} = req.body
      const task = {
       id:randomUUID(),
       name,
      }
      database.insert('task', task)
      return res.writeHead(201).end()
  }
  }  
]