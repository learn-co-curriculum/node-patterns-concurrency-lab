var expect = require('chai').expect,
  path = require('path'),
  request = require(path.join('..', 'request.js'))
  instagramPosts = require(path.join('..', 'posts.js'))

var results = [ 'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12328439_897878643643183_1624097390_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12716898_1724110531198769_672525303_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12751138_1145415418804030_1030110697_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p750x750/12534569_1563342007318009_662245616_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/1209681_820049018141685_1033997431_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/1922056_928463637201060_1668708352_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12356554_908519539244238_1109418952_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/12277549_518615008306304_2132569595_n.jpg',
  'https://scontent-lhr3-1.cdninstagram.com/t51.2885-15/e35/11917870_744507439010429_134807062_n.jpg' ]
  
describe('request.js', function () {
  it('must return URLs for images', function(done){
    request(instagramPosts, function(error, instagramImages) {
      expect(error).to.be.null
      expect(instagramImages).to.deep.equal(results)
      done()
    })
  })

})
