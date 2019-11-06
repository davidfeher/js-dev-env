/* This script generates mock data for local development.
   This way you don't have to point to an actual API.*/

/* eslint-disable no-console*/

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

jsf.resolve(schema).then(function (json) {
    fs.writeFile("./src/api/db.json", JSON.stringify(json), function(err) {
        if(err) {
            return console.log(chalk.red(err));
        } else {
            console.log(chalk.green("Mock data generated"));
        }
    });
});

