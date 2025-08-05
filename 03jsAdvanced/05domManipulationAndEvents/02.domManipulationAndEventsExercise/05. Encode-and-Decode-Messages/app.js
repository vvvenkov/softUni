function encodeAndDecodeMessages() {
    const sendMessage = document.querySelectorAll('div textarea')[0];     
    const receiveMessage = document.querySelectorAll('div textarea')[1];

    const encodeButton = document.querySelectorAll('div button')[0];
    const decodeButton = document.querySelectorAll('div button')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = sendMessage.value;
        let encodedString = '';

        for (let i = 0; i < message.length; i++) {
            let character = message[i];
            let charInt = character.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(charInt);
            encodedString += newChar
        }
        receiveMessage.value = encodedString;
        sendMessage.value = '';
    }

    function decodeMessage() {
        let message = receiveMessage.value;
        let decodedString = '';

        for (let i = 0; i < message.length; i++) {
            let character = message[i];
            let charInt = character.charCodeAt(0) - 1;
            let newChar = String.fromCharCode(charInt);
            decodedString += newChar;
        }
        receiveMessage.value = decodedString
    }
}