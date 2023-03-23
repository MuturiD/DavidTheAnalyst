function sendEmail(){	
	Email.send({
		Host : "smtp.gmail.com",
		Username : "muturidavid8@gmail.com",
		Password : "Tushiaz.",
		To : "muturidavid8@gmail.com",
		From : document.getElementById("email").value,
		Subject : "New Contact form",
		Body : "And this is the body"
	}).then(
	message => alert(message)
	);
	}