---
description: Check out my latest blog projects.
layout: layouts/base.njk
---

# latest projects

<ul>
    {%- for project in collections.projects -%}
    <li>{{ project.data.date_created }}: - <a href="{{ project.url }}">{{ project.data.title }}</a></li>
    {%- endfor -%}
</ul>
