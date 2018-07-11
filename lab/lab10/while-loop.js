var i = 1;
var j = 1;
var msg = '';
var d = '';

while(j<10){
	d = 'd' + j;
	msg = '';
    i = 1
while(i<10) {
	msg += j +' x '+ i + ' = '+ j*i + '<br/>';
    i++; 
 }

 document.getElementById(d).innerHTML = msg;
 j++
}
