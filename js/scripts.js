window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`#navigation-bar li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`#navigation-bar li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});


const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const country = document.getElementById('country');
const subject = document.getElementById('subject');
const formJs = document.getElementById('formJs');
const errorElement = document.getElementById('error');

// form addEventListener('submit', (e) => {
//    let messages = []
//    if (name.value === '' || name.value == null) {
//       messages.push('Name is required');
//    }

//    if (messages.length > 0) {
//       e.preventDefault();
//       errorElement.innerText = messages.join(', ');
//    }
   
// });