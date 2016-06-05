app.controller('SiteController', ['$timeout', SiteController]);

function SiteController($timeout) {

};

SiteController.prototype.navigate = function(section) {
    this.section = section;
};
