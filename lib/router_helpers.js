if (typeof Handlebars !== 'undefined') {
  var renderPage = function(name, options) {
    if (! _.isString(name))
      name = Meteor.Router.page();
    
    if (Template[name]) {
      if (isShark())
        return new Handlebars.SafeString(Template[name](this));
      else
        return Template[name].withData(this);
    }
  };

  var currentPage = function () {
    return Meteor.Router.page();
  };

  if (!isShark()) {
    Handlebars.registerHelper('renderPage', renderPage);
    Handlebars.registerHelper('currentPage', currentPage);
  } else {
    UI.body.renderPage = renderPage;
    UI.body.currentPage = currentPage;
  }
}
