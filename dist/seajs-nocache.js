!function(){var a="?t="+(new Date).getTime();seajs.on("fetch",function(b){b.uri&&(b.requestUri=b.uri+a)}),seajs.on("define",function(b){b.uri&&(b.uri=b.uri.replace(a,""))}),define("chenboxiang/seajs-nocache/1.0.0/seajs-nocache",[],{})}();