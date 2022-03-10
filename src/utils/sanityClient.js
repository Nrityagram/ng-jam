const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "ugaas8uk",
  dataset: "production",
  apiVersion: '2021-08-31',
  useCdn: false,
});

module.exports = client;
