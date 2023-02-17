import { access, constants } from 'node:fs';

import fs from "node:fs"

const file = 'a.txt'

fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist':'exists'}`);

})

