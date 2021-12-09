const qrcode = require('qrcode-terminal');

const { Client, ChatTypes } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
    if (message.body == 'hi') {
        message.reply('Hi, How are you?');
    };
});
//***Downloading Media***
client.on('message', async msg => {
    if (msg.hasMedia) {
        const media = await mag.downloadMedia();
        //do something with the media data hare
    }
});

//***Sending Media***
/* const {MessageMedia } = require('whatsapp-web.js');

   const media = MessageMedia.fromFilePath('./path/to/image.png');
   chat.sendMessage(media); */