---
layout: layout.html
title: "Greetings"
---

# HIII

<ul>
{%- for page in collections.pages -%}
    <li>  
        <time>{% formatDate page.date %}</time> 
        <a href="{{page.url}}">rahhh</a>
    </li>
{%- endfor -%}
</ul>
