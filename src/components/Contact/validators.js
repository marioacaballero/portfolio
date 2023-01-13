export const validator = (target) => {
  const notNull = /\S+/;
  const notEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = {};

  if (!notNull.test(target.email)) {
    error.email = '⬆ This is required ⬆';
  } else if (!notEmail.test(target.email)) {
    error.email = 'Invalid Email Adress';
  }

  if (!notNull.test(target.subject)) {
    error.subject = '⬆ This is required ⬆';
  }

  if (!notNull.test(target.message)) {
    error.message = '⬆ This is required ⬆';
  }

  return error;
};

export const hola = 'hola';
