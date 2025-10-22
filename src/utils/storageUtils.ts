const PREFIX = 'diy_extras-';

export const setKey = (key: string, value: string) => {
  sessionStorage.setItem(`${PREFIX}${key}`, value);
};

export const removeKey = (key: string) => {
  sessionStorage.removeItem(`${PREFIX}${key}`);
};

export const getKey = (key: string): string | null => {
  return sessionStorage.getItem(`${PREFIX}${key}`);
};
