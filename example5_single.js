import fs, { readFile } from "node:fs"
import minimist from 'minimist';
import { clearScreenDown } from "node:readline";

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

function singleInsRunner(func) {
  if (global.funcList) {
    if (funcList.indexOf(func) == -1) { //该func 不在funcList中,说明首次运行方法
      funcList.push(func)
      func()
    }
  } else {
    global.funcList = [] //funcList 列表不存在,先创建
    funcList.push(func)
    func()
  }
}

if (checkExist) {
  singleInsRunner(isExist)
}

if (checkReadable) {
  singleInsRunner(isWritable)
}

if (checkWritable) {
  singleInsRunner(isReadable)
}

if (checkAll) {
  singleInsRunner(isExist)
  singleInsRunner(isWritable)
  singleInsRunner(isReadable)
}


if (!filename) {
  console.log('Need filename');
  console.log('Format: --filename xxx');
  process.exit()
}

function isExist() {

  fs.access(filename, fs.constants.F_OK, (err) => {
    console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);
  })

}

function isReadable() {

  fs.access(filename, fs.constants.R_OK, (err) => {
    console.log(`${filename} ${err ? 'is not readable' : 'is readable'}`);
  })


}

function isWritable() {
  fs.access(filename, fs.constants.W_OK, (err) => {
    console.log(`${filename} ${err ? 'is not writable' : 'is writable'}`);
  })
}


