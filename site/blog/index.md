---
description: Check out my latest blog posts.
layout: layouts/base.njk

---

# Latest Posts

<ul>
    {%- for post in collections.blog reversed -%}
    <li>{{ post.data.date_created }}: - <a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {%- endfor -%}
</ul>
