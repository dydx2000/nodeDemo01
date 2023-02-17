import { access, constants } from 'node:fs';

import fs from "node:fs"

// const file = 'a.txt'

const argv = process.argv.splice(2)
console.log(argv)

const file =argv[0] 


fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist':'exists'}`);

})


fs.access(file, fs.constants.R_OK, (err)=>{
  console.log(`${file} ${err ? 'is not readable':'is readable'}`);
})

fs.access(file, fs.constants.W_OK, (err)=>{
  console.log(`${file} ${err ? 'is not writable':'is writable'}`);
})