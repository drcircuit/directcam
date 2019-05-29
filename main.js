const edge = require("edge-js");
const camera = edge.func({assemblyFile:"WebCamInterface.dll", typeName:"WebCamInterface.Camera", methodName:"Capture"});
const cameraLister = edge.func({assemblyFile:"WebCamInterface.dll", typeName:"WebCamInterface.Camera", methodName:"ListCameras"});
module.exports = {
    grab:function(cameraMoniker, callBack){
        camera(cameraMoniker, callBack);
    },
    cameras: function(param,callBack){
        cameraLister(param, callBack);
    }
}