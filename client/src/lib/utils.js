export const tryParseJSON = (input) => {
  try {
    if (typeof input !== 'string') {
      input = JSON.stringify(input);
    }
    return JSON.parse(input);
  } catch (err) {
    return input;
  }
}

export const isValidEmail = (input) => /^[A-z0-9-.]{3,}\@[A-z0-9-]{2,}\.\w{2,}(\.\w{2,})?$/.test(input);

export const redirect = (url) => {
  window.location.hash = `${url}`;
};


export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const getParentElement = (el, tagName) => {
  tagName = tagName.toLowerCase();

  while (el && el.parentNode) {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() == tagName) {
      return el;
    }
  }

  return null;
}
