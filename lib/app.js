
function openReviews(id){
    console.log(id);
    document.querySelector('#myNavigator').pushPage('reviews.html');
}


document.addEventListener('init', function (event) {

    var page = event.target;




if(page.id === 'topchart'){
    
console.log('ab');

ons.ready(function() {
    var infiniteList = document.getElementById('infinite-list');
  
    infiniteList.delegate = {
      createItemContent: function(i) {

        return ons.createElement('<ons-list-item>Item ' + i + '</ons-list-item>');
    
    },
      countItems: function() {
        return 10000;
      }
    };
  
    infiniteList.refresh();
  });
}


if(page.id==='foryou'){
    console.log("fuck");

}

});