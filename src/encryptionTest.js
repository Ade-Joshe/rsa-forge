// import jwtDecode from 'jwt-decode';
import NRSA from 'node-rsa';

const decryptData = (dataString) => {
    if (typeof dataString !== 'string') {
        return dataString;
    }

    const key = "-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----"

    const rsaInstance = new NRSA(key); // decryption key
    const jwtResponse = rsaInstance.decrypt(dataString, 'utf8');
    return (jwtResponse);
};

const encryptData = (JSONData) => {
    const key = process.env.REACT_APP_KEY_PRIVATE;

    const rsaInstance = new NRSA(key); // encryption key
    const data = rsaInstance.encrypt(JSONData, 'base64');
    return data;
};

export { decryptData, encryptData };