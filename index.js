// @flow

const ourRules = require('./ourRules');
const changeNextVersionErrorLevel = require('./changeNextVersionErrorLevel');
const getCommonConfig = require('./getCommonConfig');

const WARN = 1;

module.exports = getCommonConfig(changeNextVersionErrorLevel(ourRules, WARN));
