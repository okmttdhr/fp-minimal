
# fp-minimal

Minimal typed functional programming in TypeScript.

- 1.6KB mini library
- For people who don't want to install a lot of APIs just for function composition


## Installation

```sh
yarn add fp-minimal
```


## API

`fp-minimal` exposes only 2 functions.


### pipe

```ts
import { pipe } from 'fp-minimal';

const double = (x: number) => x * 2;
const addOne = (x: number) => x + 1;
const square = (x: number) => x * x;

pipe(double, addOne, square)(2) // 25
```


### curry

```ts
import { curry } from 'fp-minimal';

const add = (x: number, y: number) => x + y;
const addOne = curry(add)(1);

addOne(2); // 3
[1, 2, 3].map(addOne); // [2, 3, 4]
```


## License

MIT
