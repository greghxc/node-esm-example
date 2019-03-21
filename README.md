# node-esm-example
Example JavaScript console app using esm for import/export.

## use

Clone the repo, then:
```
cd node-esm-example
npm install
npm start
```

The can be run using `node index.js` or `npm start`.

## some interesting files
<dl>
  <dt>index.js</dt>
  <dd>Entry point of the application, generated by npm init. Sets up esm and loads `main.js`.</dd>

  <dt>main.js</dt>
  <dd>This is where your application _really_ begins. We import various exports from `lib`</dd>
  
  <dt>lib/*</dt>
  <dd>A couple simple files that export constants and functions a couple different ways.</dd>
  
  <dt>package.json</dt>
  <dd>Dependencies (only esm at the moment) and start script.</dd>
</dl>

## generation
The application was generated using npm init:
```
mkdir esm-test && cd esm-test
npm init esm --yes
```
