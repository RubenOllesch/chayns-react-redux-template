const DEV_URL = 'https://tappqa.tobit.com/';
const STAGING_URL = 'https://tappqa.tobit.com/';
const LIVE_URL = 'https://tapp01.tobit.com/';

// eslint-disable-next-line no-nested-ternary
const SERVER_URL = __LIVE__ ? LIVE_URL : (__STAGING__ ? STAGING_URL : DEV_URL);

export default SERVER_URL;
