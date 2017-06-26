var sudo = require('sudo');
var options = {
    cachePassword: true,
    password: 'xxx',
    prompt: 'Password, yo? ',
    spawnOptions: { /* other options for spawn */ }
};
var child = sudo([ 'cat', '/etc/shadow' ], options);
child.stdout.on('data', function (data) {
    console.log(data.toString());
});
