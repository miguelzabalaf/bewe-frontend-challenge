const authPath = '/auth';
const linksPath = '/links';

export const endpoints = {
  auth: {
    user: {
      singIn: `${ authPath }/singin`,
      login: `${ authPath }/login`,
    },
  },
  links: {
    getAll: `${ linksPath }`,
    add: `${ linksPath }/add`,
    delete: `${ linksPath }`,
  }
};
