// Hàm lưu token JWT vào localStorage
export const saveTokenToLocalStorage = (token: string): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('jwtTokenMadelab', token);
  }
};
export const saveEmailToLocalStorage = (email: string): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('jwtMadeEmail', email);
  }
};

// Hàm lưu thời gian hết hạn vào localStorage
export const saveTokenExpirationToLocalStorage = (expiration: number): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('jwtTokenMadelabExpiration', expiration.toString());
  }
};

export const removeTokenFromLocalStorage = (): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('jwtTokenMadelab');
    localStorage.removeItem('jwtTokenMadelabExpiration');
  }
}

export const getTokenFromLocalStorage = (): string | null => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('jwtTokenMadelab');
  }

  return null;
}

export const getTokenExpirationFromLocalStorage = (): string | null => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('jwtTokenMadelabExpiration');
  }

  return null;
}

// Hàm kiểm tra tính hợp lệ của token JWT
export const isTokenValid = (): boolean => {
  // console.log('isTokenValid');

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('jwtTokenMadelab');
    const expiration = localStorage.getItem('jwtTokenMadelabExpiration');

    if (token && expiration) {
      const currentTime = new Date().getTime() / 1000;
      return currentTime < Number(expiration);
    }
  }

  return false;
};