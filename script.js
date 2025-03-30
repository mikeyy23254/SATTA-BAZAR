function startWhatsAppChat() {
    // Replace '1234567890' with your WhatsApp number in international format without '+' or spaces
    var phoneNumber = '6351 050 448';
    // Optional: Pre-filled message
    var message = encodeURIComponent('Hello sir, I Need ID.');
    // WhatsApp URL
    var whatsappURL = 'https://api.whatsapp.com/send?phone=916351050448&text=Hello!%20sir%20i%20need%20id' + phoneNumber + '?text=' + message;
    // Redirect to WhatsApp chat
    window.location.href = whatsappURL;
}
