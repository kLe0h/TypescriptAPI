import express from 'express'
import diaryrouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_, res) => {
  console.log('respuesta de ping')
  res.send('pong')
})

app.use('/api/diaries', diaryrouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})