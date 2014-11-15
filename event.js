var eventemitter =require('events').EventEmitter;
var event =new eventemitter();


event.on('some_event',function(){
	console.log('some event occured');
});

setTimeout(function(){
	event.emit('some_event');
},2000);