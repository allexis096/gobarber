interface IMailConfig {
  driver: 'ethreal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethreal',

  defaults: {
    from: {
      email: 'allexis@allexis.dev',
      name: 'Allexis Figueiredo',
    },
  },
} as IMailConfig;
