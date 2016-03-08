# Async Lab

## Objectives

1. Implement your own async loop
1. You cannot use async or some other library
1. You need to make 10 requests to another service and wait until all of them responded before rendering
1. Utilize Storify API to fetch images

## Introduction

You are hired to create a website that sells stock images for designers. In order for this website to have inventory, you need to implement a scraper which fetches images from Instagram. You'll need to fetch images from some IG accounts (links provided) and save them on the disk.

In this lab, you'll implement asynchronous loop without any extra libraries to manage asynchronous code. You goal is to create a fast implementation so the requests must be fired as soon as possible, not in sequential order.

## Instructions

1. Create/open `fetch.js`
1. Use `http` to implement request function 
1. Find the image URL from the content attribute of meta with property `og: image`. You can search for a string between `<meta property="og:image" content="` and `?`. That's the image URL we need.
1. Use a callback to pass the end results of the URLs of Instagram images as an array.
1. Export the function if this script is imported or invoke the function if it runs in standalone mode (look in extra info).
1. For standalone mode print all URL of images (not posts) in the original order.
1. For module mode, make sure the callback(step 4) has arguments error and URLs.
1. Bonus: For standalone mode, output number of millisecond each request took and number of milliseconds for the entire script from start to finish. The total time shouldn't be much higher than the highest individual time. That's how you know that the requests were running concurrently, not sequentially. 
 
### Extra Info

```js
if (require.main === module) {
  // Look ma! No hands!
else {
  // I'm just a module ;(
  module.exports = fetchImages
}  

```