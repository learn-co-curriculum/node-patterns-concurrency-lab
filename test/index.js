var expect = require('chai').expect,
  path = require('path'),
  requert = require(path.join('..', 'request.js'))
  instagramPosts = require(path.join('..', 'posts.js'))

var results = [ 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12328439_897878643643183_1624097390_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12716898_1724110531198769_672525303_n.jpg' ]

describe('request.js', function () {
  it('must return URLs for images', function(done){
    request(instagramPosts, function(error, instagramImages) {
      expect(error).to.be.null
      expect(instagramImages).to.equal(results)
      done()
    })
  })

})
