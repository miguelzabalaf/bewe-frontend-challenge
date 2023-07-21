export const authPath = '/auth';
export const linksPath = '/links';

export const endpoints = {
  auth: {
    user: {
      signUp: `${ authPath }/signup`,
      login: `${ authPath }/login`,
    },
  },
  links: {
    getAll: `${ linksPath }`,
    add: `${ linksPath }/add`,
    delete: `${ linksPath }`,
  }
};
