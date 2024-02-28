---
description: Check out my latest blog projects.
layout: layouts/base.njk
---

# Latest Projects

<ul>
    {%- for project in collections.projects reversed -%}
    <li>{{ project.data.date }}: - <a href="{{ project.url }}">{{ project.data.title }}</a></li>
    {%- endfor -%}
</ul>
