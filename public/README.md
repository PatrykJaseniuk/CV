## About Me 👨‍💻
I enjoy working with computers using ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) and ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB). Currently, I'm focusing on developing web applications, especially user interfaces.
## Projects 📁
### [Sailing Ships Simulator](https://patrykjaseniuk.github.io/StatkiTSDocs/)
<!-- typescript, nextjs, jest -->
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Three.js](https://img.shields.io/badge/three.js-%23000000.svg?style=for-the-badge&logo=three.js&logoColor=white)

A 2D simulator/game written in TypeScript. Users can control a ship by adjusting sail and rudder parameters using their mouse. The simulator showcases the essence of sailing ship operation, allowing users to trim, tack, jibe, sail with the wind, and beat against it. The entire ship is constructed from molecules connected by "springs" (soft body dynamics).

### [Parys Gym Website](https://github.com/PatrykJaseniuk/ParysWeb)
<!-- mantine, typescript, nextjs, react, storybook -->
[![Mantine](https://img.shields.io/badge/-mantine-%23FFFFFF?style=for-the-badge&logo=mantine&logoColor=black)](https://mantine.dev/)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Storybook](https://img.shields.io/badge/storybook-%23FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white)

Promotional website for Parys Gym in Nysa.

## Skills 💪

### Programming Languages 💻
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)

- **TypeScript** - Currently, my favorite programming language. I value the ease of running applications on various devices (just a web browser or Node). I avoid JavaScript due to the lack of typing. I aim to write code in a functional style, using constants, as it's easier to understand (no side effects in functions).
- **C/C++** - The first language I learned. I liked it until I discovered how convenient it is to work with functions in TS/JS (first-class citizens). C++ provides more control (no garbage collector).
- **Java** - The second language I learned, and I developed my object-oriented programming concepts with it.
- **C#** - Similar to Java.
- **Python** - I used it for Raspberry Pi and some computer vision projects. It's similar to JS (lacks typing, first-class functions), but I didn't like the use of tabulation instead of curly braces.
- **PHP** - Not my favorite.

### Frameworks/Libraries 📚
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Prisma](https://img.shields.io/badge/-prisma-%232D3748?style=for-the-badge&logo=prisma&logoColor=white)

- **React** - After learning React, I fell in love with creating user interfaces.
- **Next.js** - A convenient framework/tool for building TS+React applications.
- **Jest** - I try to cover as much code as possible with tests.
- **Prisma** - fully typed ORM.

### Tools 🛠
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

- **Git** - I use it for version control of projects I work on independently. For each new feature, I create a new branch and merge it into the main branch upon completion. I try to name commits according to `conventional commits`.
- **Visual Studio Code** - It's my favorite IDE. I appreciate its simplicity and versatility (a vast number of extensions).
- **Linux** - An open-source operating system that provides greater control over hardware.
- **Docker** - light virtual environments.


### data bases 🗃
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/supabase-%23323330.svg?style=for-the-badge&logo=supabase&logoColor=white)

- **Supabase**- actually I developing project using it as backend. Appreciate typed orm. 


### Natural Languages 🌐
- **English** - B2.
- **Polish** - Native.

## Coding Style 📝

### Naming
I write long names, sometimes consisting of several words, and avoid abbreviations. For example: `CollidingTriangle`, `FluidInteraction`.

### Code Readability
While writing code, I use many intermediate constants instead of invoking functions within functions. If I can name a piece of code (what it does), I extract it into a function. I aim not to comment the code, as the names defined in the code (constants, functions, interfaces, etc.) should be self-explanatory.

```typescript
//❌
const result = doSomething(doSomethingElse(doSomethingElseAgain(doSomethingAgain())));

//✅
const somethingAgain = doSomethingAgain();
const somethingElseAgain = doSomethingElseAgain(somethingAgain);
const somethingElse = doSomethingElse(somethingElseAgain);
const result = doSomething(somethingElse);
```

### Functional Programming

I try to write code in a functional manner, meaning I don't use mutable data (let var) but prefer constants (const). This assumption makes using language constructs with a separate namespace block (e.g., for, if, switch case) pointless because any name defined there is inaccessible outside that block. Moreover, functions always return a value, or they don't make sense.

#### Examples:

##### `if` statement
```typescript

import {doSomething, doSomethingElse, getCondition} from 'something';

// Imperative:
let result1;
if(getCondition()){
    result1 = doSomething();
}else{
    result1 = doSomethingElse();
}

// Functional:
const result2 = getCondition() ? doSomething() : doSomethingElse();
```


##### `switch case` statement

```typescript

import {doSomething1, doSomething2, doSomething3, getVariant} from 'something';

// Imperative:
let result1;
switch(getVariant()){
    case 1:
        result1 = doSomething1();
        break;
    case 2:
        result1 = doSomething2();
        break;
    case 3:
        result1 = doSomething3();
        break;
}

// Functional:
const doSomething = {
    1: doSomething1,
    2: doSomething2,
    3: doSomething3
}
const result2 = doSomething[getVariant()]();
```


##### `for` loop

```typescript

import {getArray} from 'something';

// Imperative:
const array = getArray();
let result1 = [];
for(let i = 0; i < array.length; i++){
    result1.push(array[i] * 2);
}

// Functional:
const result2 = getArray().map((element) => element * 2);
```
<!-- `while` loop

```typescript

import {doSomething, checkCondition} from 'something';

// Imperative:
let result1 = doSomething(0);
while(checkCondition(result1)){
    result1 = doSomething(result1);
}

// Functional 1, recursively:
const doSomethingRecursively = (result) => checkCondition(result) ? doSomethingRecursively(doSomething(result)) : result;
const result2 = doSomethingRecursively(doSomething(0));

// Functional 2, using setTimeout (non-blocking, prevents stack overflow, slower):
const doSomethingSetTimeOut = (result) => checkCondition(result) ? setTimeout(() => doSomethingSetTimeOut(doSomething(result))) : result;
const result3 = doSomethingSetTimeOut(doSomething(0));
``` -->