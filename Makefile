SRC_FILES = $(shell find src -name '*.js')
LIB_FILES = $(patsubst src/%.js, lib/%.js, $(SRC_FILES))

all: lib dist

clean:
	rm -r lib dist

lib: $(SRC_FILES)
	babel --out-dir=lib --source-maps=true --module=umdStrict --stage=0 src
	@touch lib

dist: lib $(LIB_FILES)
	@mkdir -p dist
	browserify lib/index.js -o dist/featherhead.raw.js --standalone=Featherhead --extension=js --debug
	cat dist/featherhead.raw.js | exorcist dist/featherhead.js.map > dist/featherhead.js
	rm dist/featherhead.raw.js
	@touch dist

.PHONEY: all clean
