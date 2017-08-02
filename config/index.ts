import * as fs from 'fs';
import * as path from 'path';
import { path as appRoot } from 'app-root-path';


////////////////////////// Watson Speech-to-Text
const secretJsonPath = path.join(appRoot, 'secret', 'watson-speech-to-text.json'); // make sure this file exists.
const secret = JSON.parse(fs.readFileSync(secretJsonPath, 'utf8'));

export const wsttUrl: string = secret.url;
export const wsttUsername: string = secret.username;
export const wsttPassword: string = secret.password;
