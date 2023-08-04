class BaseEmail {

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

class InvitationEmail extends BaseEmail {
  setInviteLink(value) {
    this.inviteLink = value;
  }
  getInviteLink() {
    return this.inviteLink;
  }
}

const invitationEmail = new InvitationEmail();

console.log(invitationEmail) // Output: InvitationEmail {}

invitationEmail.setSubject("Invititation sent to join us");
invitationEmail.setBody("Click the link below to join");

console.log(invitationEmail) // Output: InvitationEmail { subject: 'Invititation sent to join us', body: 'Click the link below to join' }

invitationEmail.setInviteLink("www.problem-solving.com");

console.log(invitationEmail) // Output: InvitationEmail { subject: 'Invititation sent to join us', body: 'Click the link below to join', inviteLink: 'www.problem-solving.com' }
