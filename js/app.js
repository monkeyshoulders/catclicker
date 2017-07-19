var initialCats = [
  {
    clickCount: 0,
    name: 'Coder',
    imgSrc: 'img/1.gif',
    nickName: ['BDubs']
  },
  {
    clickCount: 0,
    name: 'Zebra',
    imgSrc: 'img/2.gif',
    nickName: ['Stripes']
  },
  {
    clickCount: 0,
    name: 'Moose',
    imgSrc: 'img/3.gif',
    nickName: ['Hips']
  },
  {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/4.gif',
    nickName: ['lazy']
  },
  {
    clickCount: 0,
    name: 'Mr. Brown',
    imgSrc: 'img/5.gif',
    nickName: ['Doc']
  },

];

var Cat = function(data) {
  this.clickCount = data.clickCount;
  this.name = data.name;
  this.imgSrc = data.imgSrc;
  this.nickName = data.nickName;


  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'Newborn';
    } else if (clicks < 20) {
      title = 'Kid';
    } else if (clicks < 30) {
      title = 'Teen';
    } else if (clicks < 40) {
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  }, this);
};

var ViewModel = function () {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.foreach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount()+ 1);
  };

  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };

};

ko.applyBindings(new ViewModel());
