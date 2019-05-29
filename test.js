var assert = require('assert');
var directcam;
var fs = require("fs");
describe("the directcam module", function () {
    it("should exist", function () {
        directcam = require("./main");
        assert(directcam);
    });
    it("should list cameras", function (done) {
        this.timeout(5000);

        directcam.cameras(null, function (err, data) {
            assert(data);
            fs.writeFileSync("cameras.json", JSON.stringify(data));
            done();
        });
    });
    it("should work by grabbing a picture", function (done) {
        this.timeout(5000);

        directcam.grab(null, function (err, data) {
            assert.equal(err, undefined);
            assert(data);
            fs.writeFileSync("test.jpg", data, 'binary');
            done();
        });
    })
});