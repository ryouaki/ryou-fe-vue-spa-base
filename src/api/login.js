export function doInit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: null,
        msg: ''
      });
    }, 500);
  });
}

export function doLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          username: 'ryouaki',
          avatar: 'https://avatars3.githubusercontent.com/u/9922563?s=40&v=4'
        },
        msg: 'Login success'
      });
    }, 500);
  });
}

export function doLogout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: null,
        msg: 'Logout success'
      });
    }, 500);
  });
}