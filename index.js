let express = require('express')
let app = express()
let axios = require('axios')

app.get('*', function (req, res) {
  console.log(req.path)
  if (req.path.includes('lqPass')) {
    let str = req.path.replace('/lqPass', '')
    axios.get('https://www.lanqiao.cn/api/v2' + str).then(data => {
      res.json(data.data)
    })
  }
  if (req.path.includes('lqApi')) {
    let str = req.path.replace('/lqApi', '')
    axios.get('https://opcenter.lanqiao.cn/api/v1' + str).then(data => {
      res.json(data.data)
    })
  }
  if (req.path.includes('lqListApi')) {
    let str = req.path.replace('/lqListApi', '')
    axios.get('https://opcenter.shiyanlou.com/api/v1' + str).then(data => {
      res.json(data.data)
    })
  }

})


app.listen(3000)