---
layout: layout.html
title: "Employed"
---

<h1>Here are the employees that work</h1>

<ul class="employee_page">
    {% for employee in employees.items %}
    <li>
        <h2>{{employee.name}}</h2>
        <h3>occupation: {{employee.occupation}}</h3>
        <img src="images/employees/{{employee.picture}}" alt="">
    </li>
    {% endfor %}
</ul>