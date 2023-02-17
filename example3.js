import fs, { readFile } from "node:fs"
import minimist from 'minimist';

// console.log(process);

const argv = process.argv.splice(2)

const args = minimist(argv)

// console.log(args);
// console.log(process);

const filename = args['filename']
const checkExist = args['e']
const checkReadable = args['r']
const checkWritable = args['w']
const checkAll = args['A']

let existFlag = true
let readFlag = true
let writeFlag = true

if(!filename) {
  console.log('Need filename');
  console.log('Format: --filename xxx');
  process.exit()
}

if (checkExist) {
  isExist()
}

if (checkReadable) {
  isReadable()
  
}

if (checkWritable){
  isWritable()
}



function isExist(){
  if (existFlag) {
    fs.access(filename, fs.constants.F_OK, (err) => {
      console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);
    })
    existFlag = !existFlag  // 反转
  } 
}

function isReadable(){

  if (readFlag) {
    fs.access(filename, fs.constants.R_OK, (err) => {
      console.log(`${filename} ${err ? 'is not readable' : 'is readable'}`);
    })
    readFlag =!readFlag
  }
  

}

function isWritable() {
  if (writeFlag) {
    fs.access(filename, fs.constants.W_OK, (err) => {
      console.log(`${filename} ${err ? 'is not writable' : 'is writable'}`);
    })
    writeFlag = !writeFlag
  }
  
}

if (checkAll) {
  isExist()
  isReadable()
  isWritable()
}


