---
description: Check out my latest blog projects.
layout: layouts/base.njk
---

# Projects

Some of these are software-related, while others are completely devoid of technology altogether. The great thing about hands-on projects is that the definition of done is usually much more apparent.

# Latest

<ul>
    {%- for project in collections.projects reversed -%}
    <li>{{ project.data.date }}: - <a href="{{ project.url }}">{{ project.data.title }}</a></li>
    {%- endfor -%}
</ul>
