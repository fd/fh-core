var test = require('unit.js');
var Featherhead = require('../lib/index').Featherhead;

describe('Featherhead', function() {
  var fh;

  before(function(){
    fh = new Featherhead({
      repo:   "test-repo",
      "cdn-domain": "cdn-domain.com",
      commit: "cbc88e4013f93e0b15f70e8fa8441a8921519e55"
    });
  });

  describe('.commit', function(){

    it('should be set by the constructor', function() {
      test.object(fh)
        .hasOwnProperty('commit', 'cbc88e4013f93e0b15f70e8fa8441a8921519e55');
    });

    it('is required by the constructor', function() {
      test.exception(function() { new Featherhead({}) })
        .match('Featherhead: invalid commit option passed to constructor.');
    });

  });

  describe('.assetURL()', function(){

    it('works with relative paths', function() {
      test.string(fh.assetURL("path/to/file"))
        .is('//cdn-domain.com/asset/test-repo/cbc88e4013f93e0b15f70e8fa8441a8921519e55/path/to/file');
    });

    it('works with absolute paths', function() {
      test.string(fh.assetURL("/path/to/file"))
        .is('//cdn-domain.com/asset/test-repo/cbc88e4013f93e0b15f70e8fa8441a8921519e55/path/to/file');
    });

  });

  describe('.dataURL()', function(){

    it('works with relative paths', function() {
      test.string(fh.dataURL("path/to/file"))
        .is('//cdn-domain.com/data/test-repo/cbc88e4013f93e0b15f70e8fa8441a8921519e55/path/to/file');
    });

    it('works with absolute paths', function() {
      test.string(fh.dataURL("/path/to/file"))
        .is('//cdn-domain.com/data/test-repo/cbc88e4013f93e0b15f70e8fa8441a8921519e55/path/to/file');
    });

    it('strips .json', function() {
      test.string(fh.dataURL("/path/to/file.json"))
        .is('//cdn-domain.com/data/test-repo/cbc88e4013f93e0b15f70e8fa8441a8921519e55/path/to/file');
    });

  });


  describe('.commitURL()', function(){

    it('always returns a single value', function() {
      test.string(fh.commitURL())
        .is('/_data/commit');
    });

  });
});
