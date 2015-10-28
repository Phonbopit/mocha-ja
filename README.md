mocha-ja
---

Practical JavaScript Testing with Mocha + Chai

## Simple Payments

* Given **Total Price** and **Money from customer**, Return **Change to customer**
* Unit available : 1, 2, 5, 10, 20, 50, 100, 500, 1000 (**Assume 20, 50, 100, 500, 1000 is coin**)
* Transform number to Thai Text (only baht)
* TODO: Transform number to Thai Text with satang.

## How does it work?

Install dependencies with :

```
npm install mocha -g
npm install chai istanbul chalk --save-dev
```

Run test with :

```
mocha
mocha -w  ## watching mode
```

Run code coverage :

```
node_modules/.bin/istanbul cover _mocha -- -R spec
```

Done!
