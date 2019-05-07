const edge = require("edge-js");
const camera = edge.func({assemblyFile:"WebCamInterface.dll", typeName:"WebCamInterface.Camera"});
module.exports = {
    grab:function(cameraMoniker, callBack){
        camera(cameraMoniker, callBack);
    }
}