class Email {

  setSubject(value) {
    this.subject = value;
  }

  getSubject() {
    return this.subject;
  }

  setBody(value) {
    this.body = value;
  }

  getBody() {
    return this.body;
  }
}


const email = new Email();
email.setSubject("Welcome to problem solving");
email.setBody("Your practice will start tomorrow")

console.log(email) // Output: Email { subject: 'Welcome to problem solving', body: 'Your practice will start tomorrow'}

console.log(email.getBody()); // Output: Your practice will start tomorrow
