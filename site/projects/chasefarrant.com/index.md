---
date_created: '2023-02-28'
date_updated: '2023-03-08'
layout: layouts/base.njk
tags:
  - projects
  - 11ty
  - eleventy
title: chasefarrant.com
---

# {{ title }}

_date created: {{ date_created }}_ \
_last updated: {{ date_updated }}_


&nbsp;
## Overview
This website uses the [eleventy](https://www.11ty.dev/) (11ty) framework. I wanted something super lightweight that I could easily stand up and maintain without having to worry about the underlying framework getting in the way.

#### GitHub Source <a href="https://github.com/farrantch/chasefarrant.com" target="_blank" style="text-decoration:none">[&#11008;]</a>

&nbsp;
## Plugins
Here are a few 11ty plugins that I enabled:
- __Favicon Generator__ - Automatically generates all the favicons required to provide the best experience to all users
- __Lazy Load Images__ - Inserts a blurry placeholder while images are still loading. This provides a better user experience while the website is loading.

&nbsp;
## Cache Busting
I also added a "cache buster" filter that generates a unique URL for static files. This allows users to immediately see changes instead of waiting for the browser TTL to expire. During the build, it inserts UNIX datetime as a query parameter to generate a "new" URL.  Right now this functionality is primarily used on the static .css files:

```hbs
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", DateTime.local().toFormat("X"));
    return `${urlPart}?${params}`;
  });
```


Usage:

```html
<link href="{% raw %}{{ '/css/styles.css' | url | bust }}{% endraw %}" rel="stylesheet" />
```

Output:
```html
<link href="/css/styles.css?v=1678309695" rel="stylesheet" />
```


Credit for functionality was copied from [this](https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/) blog post.


&nbsp;
## Code Formatting
[prismjs](https://prismjs.com/) is used for code formatting. It uses the autoloader functionality to dynamically load formatting languages. For the code formatting theme, I use a modified version of [VS Code Dark+](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css).

&nbsp;
## Architecture

Coming soon...