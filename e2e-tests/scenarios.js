'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /lists when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/lists");
  });


  describe('lists', function() {

    beforeEach(function() {
      browser.get('index.html#/lists');
    });


    it('should render view1 when user navigates to /lists', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Lists/);
    });

    it('should render list', function() {
      expect(element.all(by.css('.list')).count()).toEqual(3);
    });
  });

});
