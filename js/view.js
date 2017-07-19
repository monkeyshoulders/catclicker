
var adminView = {
  init: function() {
    this.adminElem = document.getElementById('adminArea');
    this.adminButtonElem = document.getElementById('adminButton');
    this.adminDetailsElem = document.getElementById('adminDetails');
    var elem = document.createElement('form');
    console.log(elem);
    var nameDiv = document.createElement('div');
    var name = document.createElement('input');
    var imgUrlDiv = document.createElement('div');
    var imgUrl = document.createElement('input');
    var clicksDiv = document.createElement('div');
    var clicks = document.createElement('input');
    nameDiv.innerHTML = 'Cat Name:';
    name.type="text";
    name.name="name";
    imgUrlDiv.innerHTML = 'Image URL:';
    imgUrl.type="text";
    imgUrl.name="imgUrl";
    clicksDiv.innerHTML = 'Click Counter:';
    clicks.type="text";
    clicks.name="clicks";

    var cancel = document.createElement('button');
    cancel.type = "button";
    cancel.className = "btn btn-secondary";
    cancel.textContent = "Cancel";
    cancel.addEventListener('click', function() {
      controller.toggleAdmin(elem);
    });

    var submit = document.createElement('button');
    submit.type = "button";
    submit.className = "btn btn-success";
    submit.textContent = "Submit";
    submit.addEventListener('click', function() {
      event.preventDefault();
      console.log(clicks);
      console.log(imgUrl);
      console.log(name);
      controller.toggleAdmin(elem);
      controller.updateCurrentCat(clicks.value, imgUrl.value, name.value);
      catListView.render();
    });

    elem.appendChild(nameDiv);
    elem.appendChild(name);
    elem.appendChild(imgUrlDiv);
    elem.appendChild(imgUrl);
    elem.appendChild(clicksDiv);
    elem.appendChild(clicks);
    elem.appendChild(cancel);
    elem.appendChild(submit);

    this.adminButtonElem.addEventListener('click', function() {
      controller.toggleAdmin(elem);
    });

    this.adminDetailsElem.appendChild(elem);
    this.hide(elem);

  },
  show: function(elem) {
    console.log("Show!");
    elem.style.visibility = 'visible';
  },

  hide: function(elem) {
    console.log("Made it to HIDE!");
    elem.style.visibility = 'hidden';
  }

};

var catView = {

    init: function() {
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        this.catListElem = document.getElementById('cat-list');

        this.render();
    },

    render: function() {
        var cat, elem, i;
        var cats = controller.getCats();

        this.catListElem.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];

            elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        }
    }
};
controller.init();
