var svg = document.getElementById("top-img");
var s = Snap(svg);

var cls1a = Snap.select('#cls-1-a');
var cls2a = Snap.select('#cls-2-a');
var cls3a = Snap.select('#cls-3-a');
var cls4a = Snap.select('#cls-4-a');
var cls5a = Snap.select('#cls-5-a');
var cls6a = Snap.select('#cls-6-a');

var cls1b = Snap.select('#cls-1-b');
var cls2b = Snap.select('#cls-2-b');
var cls3b = Snap.select('#cls-3-b');
var cls4b = Snap.select('#cls-4-b');
var cls5b = Snap.select('#cls-5-b');
var cls6b = Snap.select('#cls-6-b');

var cls1aPoints = cls1a.node.getAttribute('d');
var cls2aPoints = cls2a.node.getAttribute('d');
var cls3aPoints = cls3a.node.getAttribute('d');
var cls4aPoints = cls4a.node.getAttribute('d');
var cls5aPoints = cls5a.node.getAttribute('d');
var cls6aPoints = cls6a.node.getAttribute('d');

var cls1bPoints = cls1b.node.getAttribute('d');
var cls2bPoints = cls2b.node.getAttribute('d');
var cls3bPoints = cls3b.node.getAttribute('d');
var cls4bPoints = cls4b.node.getAttribute('d');
var cls5bPoints = cls5b.node.getAttribute('d');
var cls6bPoints = cls6b.node.getAttribute('d');



var to1B = function(){
  cls1a.animate({ d: cls1bPoints }, 5000, mina.backin, to1A);
}

var to1A = function(){
  cls1a.animate({ d: cls1aPoints }, 5000, mina.backin, to1B);
}

var to2B = function(){
  cls2a.animate({ d: cls2bPoints }, 5000, mina.backin, to2A);
}

var to2A = function(){
  cls2a.animate({ d: cls2aPoints }, 5000, mina.backin, to2B);
}

var to3B = function(){
  cls3a.animate({ d: cls3bPoints }, 5000, mina.backin, to3A);
}

var to3A = function(){
  cls3a.animate({ d: cls3aPoints }, 5000, mina.backin, to3B);
}

var to4B = function(){
  cls4a.animate({ d: cls4bPoints }, 5000, mina.backin, to4A);
}

var to4A = function(){
  cls4a.animate({ d: cls4aPoints }, 5000, mina.backin, to4B);
}

var to5B = function(){
  cls5a.animate({ d: cls5bPoints }, 5000, mina.backin, to5A);
}

var to5A = function(){
  cls5a.animate({ d: cls5aPoints }, 5000, mina.backin, to5B);
}

var to6B = function(){
  cls6a.animate({ d: cls6bPoints }, 5000, mina.backin, to6A);
}

var to6A = function(){
  cls6a.animate({ d: cls6aPoints }, 5000, mina.backin, to6B);
}

to1A();
to2A();
to3A();
to4A();
to5A();
to6A();
