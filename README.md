[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Minimum lock
This package provides a bare minimum tool for "locking" resources.

# How to use it?

## Installation
You can install the library into your project via npm:

```sh
npm install minimum-lock
```
This package does not have any dependencies.

## Usage
Again, this tool is bare minimum, it does not provide any fancy interface, just a class to create an object which can be locked and released.

```ts
import { Lock } from 'minimum-lock';

async function doSomethingWithLock(lock) {
  const release = await lock.acquire();
  
  doSomethingMustBeSequential();
  
  release();
}

async function doSomething() {
  ...
  
  const lock = new Lock();
  
  doSomethingWithLock(lock);
  doSomethingWithLock(lock);
}
```

⚠️ The `acquire` method returns a `release` callback, if you forget to call this `release` callback, the lock is locked forever.
