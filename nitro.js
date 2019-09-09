// @flow strict

const NitroConfig = require('@kiwicom/eslint-config-nitro');

// We are just re-exporting this package here but in the future we should move it here.
// The ultimate goal is to get rid of `@kiwicom/eslint-config-nitro` and unify all the
// rules into one Eslint config.
module.exports = NitroConfig;
