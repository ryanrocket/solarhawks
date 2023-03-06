function Default() {
	// constants
	window.addScript = (url) => {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url; 
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	document.addEventListener('DOMContentLoaded', () => {
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		if ($navbarBurgers.length > 0) {
			$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
			});
		}
		console.log("Hamburger listener added to que.")

		// metrics
		window.allocateAdr = (a) => {window.ip = a.ip || null;}
		window.addScript("https://api.ipify.org?format=jsonp&callback=window.allocateAdr");

		// flows
		// if(window.location.pathname === "/" || window.location.pathname === "" || window.location.pathname === "/contact" || window.location.pathname === "/swapa" || window.location.pathname === "/wans-research") {window.addScript("/Gradient.js");}
	});
};

export default Default