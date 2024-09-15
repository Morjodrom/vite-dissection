console.log('aliased js is imported');

document.addEventListener('DOMContentLoaded', () => {
	let el = document.querySelector('.aliased-js');
	el.textContent = 'and JS ';
	el.style.color = 'green';
})
