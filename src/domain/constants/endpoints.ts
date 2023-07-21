export const authPath = '/auth';
export const linksPath = '/links';

export const endpoints = {
  auth: {
    user: {
      singUp: `${ authPath }/singup`,
      login: `${ authPath }/login`,
    },
  },
  links: {
    getAll: `${ linksPath }`,
    add: `${ linksPath }/add`,
    delete: `${ linksPath }`,
  }
};
