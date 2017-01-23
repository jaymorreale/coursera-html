var os = require('os')

var message = 'Here is the system info:'

var sysarray = new Array('Type: ' + os.type(),
    'Node Version: ', +process.version,
    'Platform: '+os.platform(),
    'Hostname: '+os.hostname(),
    'Total Mem: '+os.totalmem(),
    // 'Model: '+os.freemen(),
    'Uptime: '+os.uptime()
  )

  console.log(message);
  var len = sysarray.length;

  for(var i = 0; i < len; i++){
    console.log(sysarray[i]);
}
