# jiti x Fastify ERR_REQUIRE_ESM error


```
$ pnpm dev

> jiti-watch-test@1.0.0 dev /Users/yshrsmz/repos/github.com/yshrsmz/jiti-watch-test
> JITI_DEBUG=1 node --watch --import jiti/register src/index.ts

[jiti] [init] version: 2.4.2 module-cache: true fs-cache: true interop-defaults: true
[jiti] [cache] [hit] ./src/index.ts ~> ./node_modules/.cache/jiti/src-index.c030801c.mjs
[jiti] [init] version: 2.4.2 module-cache: true fs-cache: true interop-defaults: true
[jiti] [native] [import] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/fastify.js
[jiti] [cache] [hit] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/fastify.js ~> ./node_modules/.cache/jiti/fastify-fastify.26d881ec.mjs
[jiti] Native import error: {"code":"ERR_REQUIRE_ESM"}
[jiti] [fallback] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/fastify.js
[jiti] [cache] [hit] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/fastify.js ~> /var/folders/0w/sff60qpj5b39qk2mt2b6rdc43l5srr/T/jiti/fastify-fastify.26d881ec.mjs
[jiti] [transpile] [esm] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/fastify.js (0.497ms)
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/schema-controller.js
[jiti] Native require error: {}
[jiti] [fallback] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/schema-controller.js
[jiti] [cache] [hit] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/schema-controller.js ~> /var/folders/0w/sff60qpj5b39qk2mt2b6rdc43l5srr/T/jiti/lib-schema-controller.cf868271.cjs
[jiti] [native] [require] ./node_modules/.pnpm/@fastify+fast-json-stringify-compiler@5.0.1/node_modules/@fastify/fast-json-stringify-compiler/index.js
[jiti] [native] [require] ./node_modules/.pnpm/@fastify+ajv-compiler@4.0.1/node_modules/@fastify/ajv-compiler/index.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/pluginUtils.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/reqIdGenFactory.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/route.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/fourOhFour.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/initialConfigValidation.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/pluginOverride.js
[jiti] [native] [require] ./node_modules/.pnpm/fastify@5.2.0/node_modules/fastify/lib/noop-set.js
node:internal/modules/esm/loader:568
      throw new ERR_REQUIRE_ESM(url, true);
            ^

Error [ERR_REQUIRE_ESM]: require() of ES Module file:///Users/yshrsmz/repos/github.com/yshrsmz/jiti-watch-test/node_modules/.pnpm/thread-stream@3.1.0/node_modules/thread-stream/package.json not supported.
    at Object.<anonymous> (/Users/yshrsmz/repos/github.com/yshrsmz/jiti-watch-test/node_modules/.pnpm/thread-stream@3.1.0/node_modules/thread-stream/index.js:3:21) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.18.1
Failed running 'src/index.ts'
```
