---
layout: default
---

{% include site/banner.inc %}

<div class="container">
    <div class="row">
        {% for itm in project_list %}
             <div class="col-lg-4 col-sm-6 col-xs-12 card-container card-with-icon-container">
                <div class="card-icon">
                    <img src={{page.projectImg}}/>
                </div>
                <div class="card-txt">
                    <p class="body-txt">{{page.project_txt}}</p>
                </div>
            </div>
        {% endfor %}
    <div>
</div>

