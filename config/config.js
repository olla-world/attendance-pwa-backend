require('dotenv').config();
const convict = require('convict');

const config = convict({
    env: {
        format: ['prod', 'dev', 'default'],
        default: 'default',
        arg: 'nodeEnv',
        env: 'NODE_ENV'
    }
});

const env = config.get('env');
config.loadFile(`./config/${env}.json`);

module.exports = config.getProperties();