// script to load configs from config.conf to .env
const fs = require('fs');
const envfile = require('envfile');
const ConfigParser = require('configparser');

const config = new ConfigParser();
config.read('config.conf');

const env = envfile.parse(fs.readFileSync('.env'));
env.REACT_APP_API_URL = config.get('frontend', 'api_url');
fs.writeFileSync('./.env', envfile.stringify(env));
