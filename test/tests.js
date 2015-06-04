var test = require('unit.js');
var Featherhead = require('../lib/index').Featherhead;

describe('Featherhead', function() {

  describe('.commit', function(){

    it('should be set by the constructor', function() {
      var fh = new Featherhead({ commit: "6a713fccf0bd691422ab91675fa005e1b052e45f" });

      test.object(fh)
        .hasOwnProperty('commit', '6a713fccf0bd691422ab91675fa005e1b052e45f');
    });

    it('is required by the constructor', function() {
      test.exception(function() { new Featherhead({}) })
        .match('Featherhead: invalid commit option passed to constructor.');
    });

  });

  describe('.resolve()', function(){

    it('works with objects', function(done) {
      var fh = new Featherhead({ commit: "6a713fccf0bd691422ab91675fa005e1b052e45f" });

      test.promise
        .given(fh.resolve({ path: "path/to/file" }))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
        })
        .catch(function(err){
          test.fail(err.message);
        })
        .finally(done)
        .done();
    });

    it('works with relative paths', function(done) {
      var fh = new Featherhead({ commit: "6a713fccf0bd691422ab91675fa005e1b052e45f" });

      test.promise
        .given(fh.resolve("path/to/file"))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
        })
        .catch(function(err){
          test.fail(err.message);
        })
        .finally(done)
        .done();
    });

    it('works with absolute paths', function(done) {
      var fh = new Featherhead({ commit: "6a713fccf0bd691422ab91675fa005e1b052e45f" });

      test.promise
        .given(fh.resolve("/path/to/file"))
        .then(function(unit){
          test.object(unit)
            .hasOwnProperty('path',    '/path/to/file')
            .hasOwnProperty('dir',     '/path/to')
            .hasOwnProperty('base',    'file')
            .hasOwnProperty('address', '/_asset/6a713fccf0bd691422ab91675fa005e1b052e45f/path/to/file');
        })
        .catch(function(err){
          test.fail(err.message);
        })
        .finally(done)
        .done();
    });

  });
});
