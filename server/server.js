const jsonServer = require('json-server')
const { generateCode } = require('./generate-code')
const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/code', (_, res) => {
  const code = generateCode()

  res.json(code)
})

server.post('/validate', (req, res) => {
  const { email, code } = req.body
  try {
    if (!email || !code) {
      res.status(402).send('Params not found')
      return
    }

    res.send(Math.random() < 0.5)
  } catch (error) {
    res.status(402).send('')
  }
})

server.use(router)
server.listen(3100, () => {
  console.log('JSON Server is running')
})
