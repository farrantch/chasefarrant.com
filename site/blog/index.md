---
description: Check out my latest blog posts.
layout: layouts/base.njk

---

# Blog

My thoughts and ramblings on various topics, some software-related and others not. These posts are opinionated, subject to change over time, and should be taken with minuscule granules of sodium.

# Latest

<ul>
    {%- for post in collections.blog reversed -%}
    <li>{{ post.data.date }}: - <a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
</ul>
