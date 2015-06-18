var test = require('unit.js');
var Featherhead = require('../lib/index').Featherhead;

describe('Featherhead', function() {
  var fh;

  before(function(){
    fh = new Featherhead({
      commit: "cbc88e4013f93e0b15f70e8fa8441a8921519e55",
      assets: "6a713fccf0bd691422ab91675fa005e1b052e45f"
    });
  });

  describe('.commit', function(){

    it('should be set by the constructor', function() {
      test.object(fh)
        .hasOwnProperty('commit', 'cbc88e4013f93e0b15f70e8fa8441a8921519e55');
    });

    it('is required by the constructor', function() {
      test.exception(function() { new Featherhead({ assets: "6a713fccf0bd691422ab91675fa005e1b052e45f" }) })
        .match('Featherhead: invalid commit option passed to constructor.');
    });

  });

  describe('.assets', function(){

    it('should be set by the constructor', function() {
      test.object(fh)
        .hasOwnProperty('assets', '6a713fccf0bd691422ab91675fa005e1b052e45f');
    });

    it('is required by the constructor', function() {
      test.exception(function() { new Featherhead({ commit: "cbc88e4013f93e0b15f70e8fa8441a8921519e55" }) })
        .match('Featherhead: invalid assets option passed to constructor.');
    });

  });

  describe('.resolve()', function(){

    it('works with objects', function(done) {
      test.promise
        .given(fh.resolve({ path: "path/to/file" }))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
          done();
        })
        .catch(function(err){
          test.fail(err.message);
          done(err);
        })
        .done();
    });

    it('works with relative paths', function(done) {
      test.promise
        .given(fh.resolve("path/to/file"))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
          done();
        })
        .catch(function(err){
          test.fail(err.message);
          done(err);
        })
        .done();
    });

    it('works with absolute paths', function(done) {
      test.promise
        .given(fh.resolve("/path/to/file"))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
          done();
        })
        .catch(function(err){
          test.fail(err.message);
          done(err);
        })
        .done();
    });

  });
});
