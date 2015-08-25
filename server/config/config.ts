import {resolve} from 'path';

const env: string = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
const config = require('./env/' + env + '.json');

export const port: number = process.env.PORT || 3000;
export const root: string = resolve(__dirname, '/../..');
export const secret: string = config.secret;
export const dist: string = config.app.dist;