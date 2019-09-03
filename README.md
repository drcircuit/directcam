# directcam
A small library to access DirectShow compatible cameras through NodeJS

# Basic Usage:
```javascript
const dcam = require("directcam");
const fs = require("fs");

dcam.cameras(null, function(err, cams){
    console.table(cams);
    console.log("hello!");
    dcam.grab(cams.Moniker, function(err, img){
        fs.writeFileSync("img.jpg", img);
    });
});
```

## Functions
- All callback functions need to be in function(err, result){} format

### directcam.cameras(args, callback) [Camera]
returns an array of camera objects in the system to the callbac

Camera Object:
```javascript
{
    index: Number,
    Name: string,
    Moniker: string (device reference)
}
```
### directcam.grab(moniker, callback) []
returns an image frame to the callback function

