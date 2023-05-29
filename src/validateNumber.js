export default class ValidateNumber {
  static validate(phoneNumber) {
    let clearNumber = phoneNumber.replace(/[ ()-]/g, '');
    if (/^8/.test(clearNumber)) {
      clearNumber = clearNumber.replace('8', '+7');
    }
    return clearNumber;
  }
}
