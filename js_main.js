document.addEventListener('DOMContentLoaded', function(){  //Means when the content is loaded
var wrapper = document.getElementById('wrapper');   //"let" replaces "var" 
var topLayer = wrapper.querySelector('.top');   //Get all classes of "top" inside the "id=wrapper" above will be a "var"
var handle = wrapper.querySelector('.handle');  //
var skew = 0;
var delta = 0;  //

if(wrapper.className.indexOf('skewed')!=-1){  //Test to find "if" "wrapper" has a "class" of "skew", if not found it is = to -1
	skew = 1000;
}

wrapper.addEventListener('mousemove', function(e){  //"e" is for "Event"
	delta = (e.clientX - window.innerWidth / 2) * 0.5; //Gets the position of mouse and center x position (horizontal) point and takes away from the "window.innerwidth" by dividing by 2 and multiple by 0.5
	
	handle.style.left = e.clientX + delta + 'px'; //Moves the "handle", ".style" changes any "CSS" property and sets ti to "X" 
	
	topLayer.style.width = e.clientX + skew + delta + 'px'; //Sets "e.clientX" to "px"  /Set "top" layer to move with "handle"
	});
});