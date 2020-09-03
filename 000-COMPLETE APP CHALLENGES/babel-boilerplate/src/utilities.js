// Named export
// import { ... } from '...';
// can have as many as needed

// Default export
// can only have one

const add = (a, b) => a + b;

const name = "Tony";

const square = (x) => x * x;

export { add, name, square as default };
