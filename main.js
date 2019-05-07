const edge = require("edge");
const camera = edge.func({assemblyFile:"WebCamInterface.dll", typeName:"WebCamInterface.Camera"});
module.exports = {
    grab:function(cameraMoniker, callBack){
        camera(cameraMoniker, callBack);
    }
}