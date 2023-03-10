---
description: Check out my latest blog posts.
layout: layouts/base.njk

---

# latest posts

<ul>
    {%- for post in collections.blog -%}
    <li>{{ post.data.date_created }}: - <a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
</ul>
