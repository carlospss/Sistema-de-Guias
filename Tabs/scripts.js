var link_active_index = 0;

function link_active(link) {
	link.classList.add('active');
}
function link_deactive(links) {
	links[link_active_index].classList.remove('active');
}

function hid_content(contents) {
	contents[link_active_index].classList.remove('show');
}
function show_content(index) {
	const content = document.querySelectorAll('.content');
	hid_content(content);
	content[index].classList.add('show');
}


document.addEventListener('DOMContentLoaded', function() {

	const links = this.querySelectorAll('li a');

	for(let i = 0; i < 4; i++) {

 		links[i].onclick = function(event) {

 			event.preventDefault();
 			
 			link_deactive(links);
 			link_active(this);
 			show_content(i);
 			link_active_index = i;
 		};
 	}
});
