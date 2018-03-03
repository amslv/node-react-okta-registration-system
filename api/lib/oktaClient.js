
const okta = require('@okta/okta-sdk-nodejs');
const client = new okta.Client({
  orgUrl: 'https://dev-262506.oktapreview.com',
  token: '00V-kAhuRdF6AaGfZnimXLY0IQS_SGE8sXqHYZv93I'
});
module.exports = client;