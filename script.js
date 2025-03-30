document.getElementById('whatsappImage').addEventListener('click', function() {
    // Replace 'NUMBER' with the actual WhatsApp number
    var phoneNumber = '6351 050 448';
    
    // Create the WhatsApp URL
    var whatsappURL = `https://api.whatsapp.com/send?phone=916351050448&text=Hello!%20sir%20i%20need%20id${phoneNumber}`;
    
    // Open the WhatsApp DM
    window.open(whatsappURL, '_blank');
});
