export const authPath = '/auth';
export const linksPath = '/links';

export const endpoints = {
  auth: {
    user: {
      signUp: `${ authPath }/singin`,
      login: `${ authPath }/login`,
    },
  },
  links: {
    getAll: `${ linksPath }`,
    add: `${ linksPath }/add`,
    delete: `${ linksPath }`,
  }
};
