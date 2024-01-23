---
date_created: '2023-02-28'
date_updated: '2024-01-20'
layout: layouts/base.njk
tags:
  - projects
  - 11ty
  - eleventy
title: chasefarrant.com
---

# {{ title }}
#### GitHub Source <a href="https://github.com/farrantch/chasefarrant.com" target="_blank" style="text-decoration:none">[&#11008;]</a>
_date created: {{ date_created }}_ \
_last updated: {{ date_updated }}_


&nbsp;
## Overview
This website uses the [eleventy](https://www.11ty.dev/) (11ty) framework. I wanted something super lightweight that I could easily stand up and maintain without worrying about the underlying framework getting in the way.


&nbsp;
## Plugins
Here are a few 11ty plugins that I enabled:
- __Favicon Generator__ - Automatically generates all the different favicons required to provide the best experience for all users.
- __Lazy Load Images__ - Inserts a blurry placeholder while images are still loading, providing a better user experience while the website is loading.

&nbsp;
## Cache Busting
I added a "cache buster" that generates a unique URL for static files. This functionality allows users to immediately see changes instead of waiting for the cache TTL to expire. During the build, it inserts a UNIX datetime as a query parameter to generate a unique URL for static files. This functionality is primarily used on the static css files:

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


&nbsp;
## Code Formatting
[prismjs](https://prismjs.com/) is used for code formatting. It uses the autoloader functionality to dynamically load languages, removing the need to download all possible language parsers.

```html
  ...
  </head>
  <body>
    <script src="https://unpkg.com/prismjs@v1.x/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
  ...
  </body>
  ...
```

For the code formatting theme, I use a modified version of [VS Code Dark+](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css).

&nbsp;
## Architecture
```
                      ┌────────────┐
                      │            │
                      │  ACM Cert  │
                      │            │
                      └────────────┘
                             ▲
                             │                           ┌────────────────────────┐
                             │                           │                        │
                                        ┌───► http ────► │ S3 (redirect to https) │
┌────────────┐        ┌────────────┐    │                │                        │
│            │        │            │    │                └────────────────────────┘
│  Route 53  │ ─────► │ CloudFront ├────┤
│            │        │            │    │                ┌────────────────────────┐
└────────────┘        └────────────┘    │                │                        │
                                        └───► https ───► │          S3            │
                                                         │                        │
                                                         └────────────────────────┘
```

&nbsp;
## Fonts

Instead of linking to Google Fonts, I downloaded the fonts locally using [this](https://www.reddit.com/r/webdev/comments/sfnk0l/ive_seen_a_number_posts_about_improving_page/) guide and the [google-webfonts-helper](https://gwfh.mranftl.com/fonts) tool.

  - Headings - _Quicksand_
  - Body - _Noto Sans_


&nbsp;
## Colors:
  - ![#f03c15](https://placehold.co/15x15/1B1B1B/1B1B1B.png) #1B1B1B
  - ![#f03c15](https://placehold.co/15x15/E6AF2E/E6AF2E.png) #E6AF2E
  - ![#f03c15](https://placehold.co/15x15/4F9D69/4F9D69.png) #4F9D69
  - ![#f03c15](https://placehold.co/15x15/F27059/F27059.png) #F27059
  - ![#f03c15](https://placehold.co/15x15/7EBDC3/7EBDC3.png) #7EBDC3
  - ![#f03c15](https://placehold.co/15x15/E0E2DB/E0E2DB.png) #E0E2DB
