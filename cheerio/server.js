var request = require('request');
var cheerio = require('cheerio');

// access the data by scraping it directly:
// request('https://www.youtube.com/results?search_query=donald+trump', function (error, response, html) {
//   var $ = cheerio.load(html)
//
//   console.log($('a'))
//
//
// });

// request('https://www.youtube.com/watch?v=L4789wYMMO4', function (error, response, html) {
//   var $ = cheerio.load(html)
//
//   console.log( $(".comment-renderer-text-content").text()  )
//
//
// });


// access the data by scraping it directly:
request('http://www.indeed.com/jobs?q=web+developer&l=New+York%2C+new+york&rq=1&fromage=last', function (error, response, html) {
  var $ = cheerio.load(html)
  var linkArray=[];
  var links=   $('a');
// console.log(links);
  links. each(function (index, link) {
       var $link = $(link);
       var href = $link.attr('href');
       if (href.startsWith('http://www.indeed.com/pagead')) {
         console.log(href);
       linkArray.push(href)
      //  console.log(href);
       };
     });
     console.log(linkArray.length);

     hitLinks(linkArray, 0)

     function hitLinks(linkArray, index) {
       request('http://www.indeed.com/'+linkArray[index],function (error, response, html) {
         if (error) {
           console.log('error!',error);
         }
         var $ = cheerio.load(html)
        //  console.log($('ul').text());
         console.log('');

         if (index<linkArray.length) {
           index++;
           hitLinks(linkArray, index)

         };

       } )
     }




});







//
// var linkArray = [];
//
// getLinks();
// function getLinks() {
//
//
//   request('http://www.nytimes.com/', function (error, response, html) {
//     console.log(error);
//     var $ = cheerio.load(html)
//
//     var links = $("a");
//
//     links. each(function (index, link) {
//       var $link = $(link);
//       var href = $link.attr('href');
//       if (href.startsWith('http://www.nytimes.com/2016')) {
//       linkArray.push(href)
//       };
//
//     });
//     // console.log(linkArray);
//     console.log(linkArray[0]);
//     hitLinks()
//   });
//
// };
//
// function hitLinks() {
//   var link=linkArray[0]
//   request('http://www.nytimes.com/2016/02/26/us/politics/ted-cruz-texas.html', function (error, response, html) {
//       var $ = cheerio.load(html);
//       console.log($('body'));
//   })
// }






// var linkArray = [];
//
// getLinks();
// function getLinks() {
//
//
//   request('http://www.cnn.com/', function (error, response, html) {
//     var $ = cheerio.load(html)
//     var links = $("a");
//
//     links. each(function (index, link) {
//       var $link = $(link);
//       var href = $link.attr('href');
//       if (href.includes('politics')) {
//         linkArray.push(href)
//       }
//     });
//
//     console.log(linkArray.length);
//       request('http://www.cnn.com/'+linkArray[0], function (error, response, html) {
//        var $ = cheerio.load(html)
//        var text = $('.zn').text();
//
//        var sentences = text.split('.');
//        var trumpMentions = [];
//        sentences.forEach(function (sentence) {
//          if (sentence.includes('Trump')) {
//            trumpMentions.push(sentence)
//
//          }
//
//        })
//        console.log(trumpMentions);
//
//       })
//     });
//
//   };

// access the data by scraping it directly:
// request('https://foia.state.gov/searchapp/DOCUMENTS/HRCEmail_Feb19thWeb/08641FEB19/DOC_0C05798030/C05798030.pdf', function (error, response, html) {
//   var $ = cheerio.load(html)
//   console.log(error);
//   console.log(   $('body').text()   )
//
//
// });





// request('http://www.cnn.com/2016/02/24/politics/donald-trump-nevada-voters/index.html', function (error, response, html) {
//   console.log(error);
//  var $ = cheerio.load(html)
//  console.log($('body'));
// })
