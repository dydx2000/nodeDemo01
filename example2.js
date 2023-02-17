import { access, constants } from 'node:fs';

import fs from "node:fs"
import minimist from 'minimist';


const argv = process.argv.slice(2,)
// const argv = process.argv[3]


const args = minimist(argv)

console.log(argv);
console.log(args);

// const filename = args['filename'] 
// const checkExist = args['e']  
// const checkReadable = args['r']
// const checkWritable = args['w']


// if(!filename) {
//   console.log('Need filename'); 
//   console.log("--filename xxx");  
//   process.exit()
// }


// let filename = '2a.txt'
const filename = argv[0]

fs.access(filename, fs.constants.F_OK, (err) => {
  console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);

})


fs.access(filename, fs.constants.R_OK, (err) => {
  console.log(`${filename} ${err ? 'is not readable' : 'is readable'}`);
})

fs.access(filename, fs.constants.W_OK, (err) => {
  console.log(`${filename} ${err ? 'is not writable' : 'is writable'}`);
})

// fs.access(filename, fs.constants.R_OK && fs.constants.W_OK, (err)=>{
//   console.log(`${filename} ${err ? 'is not writable' : 'is writable'}`);
// })

// const PORT = env.IP  || 80
