const car = require('./car');
const {add, minus} = require('./build')
const envs = require('./envs.json');
// import {add, minus} from './build';

car.create()

add()
minus()

console.log(envs.dev.uk)