////
const Browser = require('zombie');

describe('User visits Hello World page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('http://wildfly-qa:8081/demo/', done);
  });

  describe('submits form', function() {

    before(function(done) {
        // Don't submit anything yet - for now
        done();
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see Hello World', function() {
      browser.assert.text('h2', 'Hello World');
    });
  });
});
