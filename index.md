---
layout: layout.html
title: "Welcome!!!"
---

<h1>HI hello</h1>

<ul class="page_preview">
{%- for page in collections.pages -%}
    <li>  
        <h2>{{page.data.title}}</h2>
        <img src="{{page.data.image}}" alt="">
        <time>{% formatDate page.date %}</time> 
        <a href="{{page.url}}">{{page.data.title}}</a>
    </li>
{%- endfor -%}
</ul>
