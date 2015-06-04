all: lib dist

clean:
	rm -r lib dist

lib: src/*.js
	babel --out-dir=lib --source-maps=true --module=umdStrict --stage=0 src
	@touch lib

dist: lib/*.js
	@mkdir -p dist
	browserify lib/index.js -o dist/featherhead.raw.js --standalone=Featherhead --extension=js --debug
	cat dist/featherhead.raw.js | exorcist dist/featherhead.js.map > dist/featherhead.js
	rm dist/featherhead.raw.js
	@touch dist

.PHONEY: all clean
