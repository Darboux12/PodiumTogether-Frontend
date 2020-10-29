import SecureLS from "secure-ls";

const podiumStorage = new SecureLS({encodingType: 'aes',isCompression: false});

export default podiumStorage;