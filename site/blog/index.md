---
description: Check out my latest blog posts.
layout: layouts/base.njk

---

# Blog

Here are my thoughts and opinions on various topics, some software-related and others not. These posts can be highly opinionated, subject to change over time, and may not reflect my current views.

# Latest

<ul>
    {%- for post in collections.blog reversed -%}
    <li>{{ post.data.date }}: - <a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
</ul>
