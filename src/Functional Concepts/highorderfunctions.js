/**
 *
 * @param {boolean} condition
 * @param {function} fnTrue
 * @param {function} fnFalse
 */
const invokeIf = (condition = false, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Your are welcome");
const showUnauthorized = () => console.log("Your are unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);
