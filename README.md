# Async Lab

## Objectives

1. Implement your own async loop
1. You cannot use async or some other library
1. You need to make 10 requests to another service and wait until all of them responded before rendering
1. Utilize Storify API to fetch images

## Introduction

You are hired to create a website that sells stock images for designers, but for this website to have inventory, you need to implement a scrapper which fetches images from internet. Instagram is one of the source for images. As the test, you'll need to fetch images from some IG accounts (links provided) and save them on the disk.

In this lab, you'll implement asynchronous loop without any extra libraries to manage asynchronous code. You goal is to create a fast implementation so the requests must be fired as soon as possible, not in sequential order.

## Instructions

1. Create/open `fetch.js`
1. Use `http` to implement request function 
1. Find the image URL from the content attribute of meta with property `og: image`. 
1. Use a callback to pass the end results of the URLs of Instagram images as an array.
1. Export the function if this script is imported or invoke the function if it runs in standalone mode (look in extra info).
1. For standalone mode print all URL of images (not posts) in the original order.
1. For module mode, make sure the callback(step 4) has arguments error and URLs.
1. Bonus: For standalone mode, output number of millisecond each request took.
 
### Extra Info

```js
if (require.main === module) {
  // Look ma! No hands!
else {
  // I'm just a module ;(
  module.exports = fetchImages
}  

```