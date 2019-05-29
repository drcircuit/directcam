'use strict'

var gentlyCopy = require('gently-copy');

var filesToCopy = [
    "AForge.dll",
    "AForge.Video.DirectShow.dll",
    "AForge.Video.DirectShow.xml",
    "AForge.Video.dll",
    "AForge.Video.xml",
    "WebCamInterface.dll",
];

gentlyCopy(filesToCopy, process.env.INIT_CWD);