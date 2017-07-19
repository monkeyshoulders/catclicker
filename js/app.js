var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.level = ko.observable('infant')
  this.imgSrc = ko.observable('img/2.gif');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount()+ 1);
  };


}

ko.applyBindings(new ViewModel())
