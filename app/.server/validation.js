export function validationText(text) {
  if (text.length < 3) {
    return "invalid input";
  }
  // return null;
}
export function validationNumber(num) {
  if (Number(num) <= 0) {
    return "value cannot be zero";
  }
}
