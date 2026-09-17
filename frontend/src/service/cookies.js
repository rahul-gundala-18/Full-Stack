import Cookie from 'js-cookie';

export const setCookie = (key, value, expires = 1) => {
  if (typeof window !== 'undefined') {
    Cookie.set(key, value, { expires }); // Expires in 1 day
  }
};

export const removeCookie = (key) => {
  if (typeof window !== 'undefined') {
    Cookie.remove(key);
  }
};

export const getCookie = async (key) => {
  if (typeof window !== 'undefined') {
    return await Cookie.get(key);
  }
  return null;
};