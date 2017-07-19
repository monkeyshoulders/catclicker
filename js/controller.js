
var controller = {

    init: function() {
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
        adminView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    toggleAdmin: function(elem) {
   if (model.showAdmin == false) {
     model.showAdmin = true;
     adminView.show(elem);
   }
   else {
     model.showAdmin = false;
     adminView.hide(elem);
   }
 }
};
