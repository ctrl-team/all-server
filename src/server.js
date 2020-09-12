const express = require('express')
const { join } = require('path')
const { readdirSync } = require('fs')
const app = express()

const views = join(__dirname, 'views')
const files = readdirSync(views)

app.use(express.static(join(__dirname, 'public')))
app.get('/niestop', (req, res) => res.sendFile(join(views, 'niestop.html')))
app.get('/dinozzz', (req, res) => res.sendFile(join(views, 'dinozzz.html')))
app.get('/spookygame', (req, res) => res.sendFile(join(views, 'spookygame.html')))
app.get('/wordguess', (req, res) => res.sendFile(join(views, 'wordguess.html')))
app.get('/noobclicker', (req, res) => res.sendFile(join(views, 'noobclicker.html')))
app.get('/keyguess', (req, res) => res.sendFile(join(views, 'keyguess.html')))
app.get('/jebleb', (req, res) => res.sendFile(join(views, 'jebleb.html')))
app.get('/rps', (req, res) => res.sendFile(join(view, 'rps.html')))
app.all('/', (req, res) => {
  res.sendFile(join(views, 'index.html'))
  /*const json = { endpoints: [] }
  files.forEach(file => json.endpoints.push(file.replace(/.html/gm, '')))
  res.json(json)*/
})

app.listen(8008, () => console.log('Server is ready.'))
