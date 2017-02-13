
//array of image links
var images = ["http://www.gp.se/image/policy:1.3855270:1476020222/ken%20-%20Kopia.jpg?$p=b8f4cc9&w=1136&$w=ec52ab9", "http://stoppapressarna.se/sites/default/files/styles/flexslider_full/public/ken1.jpg", "http://www.kingsizemag.se/wp-content/uploads/2014/05/ken-ring-sommar-turne-2014-L.jpg", "http://www.musikevent.se/images/artister/ken_ring.jpg", "http://www.kingsizemag.se/wp-content/uploads/2013/11/ken-ring-2013-press-L.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/81/Ken_ring_crop.jpg", "https://i.ytimg.com/vi/AIjBb6hF-Is/hqdefault.jpg", "http://cdn08.dayviews.com/67/_u2/_u4/_u9/_u0/_u6/_u9/u2490695/18834_1254998065.jpg", "http://www.kingsizemag.se/wp-content/uploads/2016/05/ken-ring-2016-2-l.jpg"]

$( document ).ready(function() {

$('div.container-fluid').click(function(){
    
 
   $('#myTextDiv').empty();
    $('#ImageDiv').empty();
    var nextQuote = [];  

    var randomize = jsonData[Math.floor(Math.random() *1000)].quote;
    
    nextQuote.push(randomize);
    
    var randomizeImg = images[Math.floor(Math.random() *8)];
    
    var mydiv = document.getElementById("myTextDiv");
     mydiv.appendChild(document.createTextNode(nextQuote[0]));
    var img = document.createElement('img'); 
    img.setAttribute('class', 'img-responsive center-block');
    img.setAttribute('src', randomizeImg);
    document.getElementsByTagName('div')[2].appendChild(img);
    
    ga('send', {
        hitType: 'event',
        eventCategory: 'click',
        eventAction: 'nextQuote'
    });
  });
});

