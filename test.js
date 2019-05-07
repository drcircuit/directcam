var assert = require('assert');
var directcam;
var fs = require("fs");
describe("the directcam module", function(){
    it("should exist", function(){
        directcam = require("./main");
        assert(directcam);
    });
    it("should work by grabbing a picture", function(){
        directcam.grab(null, function(err, data){
            assert.equal(err, undefined);
            assert(data);
            fs.writeFileSync("test.jpg", data, 'binary');
        });
    })
});