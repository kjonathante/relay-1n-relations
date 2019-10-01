## Generic Types

### Syntax

#### functions

```
function method<T>(param: T): T {
  // ...
}

function<T>(param: T): T {
  // ...
}
```

#### function types

```
function method(func: <T>(param: T) => T) {
  // ...
}
```

#### classes

```
class Item<T> {
  prop: T;

  constructor(param: T) {
    this.prop = param;
  }

  method(): T {
    return this.prop;
  }
}
```

#### type aliases

```
type Item<T> = {
  foo: T,
  bar: T,
};
```

#### interfaces

```
interface Item<T> {
  foo: T,
  bar: T,
}
```
