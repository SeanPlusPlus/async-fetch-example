const request = require('request')
const async = require('async')

const get = (url, cb) => {
  request.get(url, (err, response, body) => {
    if (err) {
      cb(err)
    } else {
      console.log(url)
      cb(null, body)
    }
  })
}

const urls = [
  'https://httpbin.org/ip',
  'https://httpbin.org/uuid',
  'https://httpbin.org/anything',
]

async.map(urls, get, (err, results) => {
  if (err) {
    console.log(err)
    return
  } else {
     results.forEach(r => {
       console.log(r)
    })
  }
})
