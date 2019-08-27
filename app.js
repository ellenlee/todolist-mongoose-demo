const express = require('express')               // 載入 express
const app = express()                            // 建立 express instance

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log('App is running!')
})
