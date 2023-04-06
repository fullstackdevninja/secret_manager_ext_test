import CryptoJS from "crypto-js";

export const generateSecret = () => {
  const array = new Uint32Array(4);
  window.crypto.getRandomValues(array);
  return Array.from(array)
    .map((num) => num.toString(36))
    .join("");
};

export const encrypt = (data, password) => {
  return CryptoJS.AES.encrypt(data, password).toString();
};

export const decrypt = (ciphertext, password) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  return bytes.toString(CryptoJS.enc.Utf8);
};
