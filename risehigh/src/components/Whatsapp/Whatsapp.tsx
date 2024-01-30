import React from 'react';


const WhatsAppChat = () => {
  const phoneNumber = '+2349050000770'; // Replace with your phone number
  const message = 'Thank you for contacting Rise High hotel, Please how can we be of help to you'; // Replace with your message

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  const openWhatsApp = () => {
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
        <i className="fa-brands fa-whatsapp cursor-pointer text-2xl md:text-3xl text-blue-400"  onClick={openWhatsApp}  />
      {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" onClick={openWhatsApp} style={{ cursor: 'pointer' }} /> */}
    </div>
  );
};

export default WhatsAppChat;
