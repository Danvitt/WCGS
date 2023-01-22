const toggleButton = document.getElementsByClassName('navbar-toggler')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function(){
	for(var i=0; i<navbarLinks.length; i++)
	navbarLinks[i].classList.toggle('active');
});


// Script for auto update
/*<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
</script>	
*/
