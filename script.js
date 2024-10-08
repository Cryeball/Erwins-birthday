document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    
    let message = `Thank you for your response, ${name}!`;
  
    if (attendance === 'yes') {
      message += ' We are thrilled to see you at the party! 🎉';
    } else if (attendance === 'no') {
      message += " We'll miss you, but thanks for letting us know! 😔";
    } else {
      message += " Hope to see you if you can make it! 🤞";
    }
    
    document.getElementById('confirmation-message').textContent = message;
  });
  