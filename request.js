var instagramPosts = require('./posts.js')
var https = require('https')

function fetchImages(instagramPosts, callback) {
  var instagramImages = []
  var counter = 0
  var numberOfPosts = instagramPosts.length
  instagramPosts.forEach(function(post, index){
    var timeStart = Date.now()
    https.get(post, function(response) {
      var body = ''
      response.on('data', function(chunk) {
        body += chunk
      })
      response.on('end', function () {
        var timeEnd = Date.now()
        var needle = '<meta property="og:image" content="'
        var urlStart = body.indexOf(needle)
        var urlEnd = body.indexOf('?', urlStart + needle.length)
        instagramImages[index] = body.substring(urlStart+needle.length, urlEnd)
        counter++
        if (require.main === module) console.log(timeEnd-timeStart)
        if (counter == numberOfPosts) return callback(null, instagramImages)
      })
    }).on('error', function(error){
      callback(error)
    })
  })

}

if (require.main === module) {
  var totalTimeStart = Date.now()
  fetchImages(instagramPosts, function(error, instagramImages){
    var totalTimeEnd = Date.now()
    console.log(instagramImages, totalTimeEnd- totalTimeStart)
  })
}
else {
  module.exports = fetchImages
}