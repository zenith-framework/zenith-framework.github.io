---
title: Quick start
description: Quick start with Zenith
---

You can start a web server in 2 lines using `blaze`.

# Running blaze

```sh
bun init my-project
cd my-project
bun add @zenith-framework/blaze
```

And then add these lines in `src/index.ts` (**NOTE: It is a good practice to put your modules root to `src` to avoir loading too much files**).

```ts title=src/index.ts
import { startBlaze } from '@zenith-framework/blaze'
startBlaze();
```


It will by default:
- load systems (web)
- load your modules
- start a web server (on port 3000 by default)

## Configuration

### Web server
To change the port exposed by the web server, add this new file:

```ts title=src/web.config.ts
@Config(ZenithWebConfig)
export class MyWebConfig extends ZenithWebConfig {
    httpServerPort(): number {
        return 3005; // your custom port
    }
}
```

This configuration needs to extend `ZenithWebConfig` to be able to override functions that will be needed by the `web` system.