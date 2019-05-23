---
layout: default
---

{% include site/banner.inc %}
<div id="agenda-page">
    <div class="container">
        <div class="row title">
          <div class="col-xs-12">
            <div class="download-container full-width bottom-border">
              <div class="download-row">
                <img class="download-img" src="/assets/site/images/download-icon.svg">
                <h4 class="download-agenda"><a href="/download-agenda/">{{page.download_txt}}</a></h4>
              </div>
            </div>
          </div>
        </div>

        <div class="row text-center padding-side-15 padding-top-10">
            <div class="col-md-3 col-sm-6 col-xs-6 ">
                <div id="btn-day1" class="btn-day active"><p>{{page.first-day_txt}}</p></div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 right-15">
                <a id="btn-day2" class="btn-day"><p>{{page.second-day_txt}}</p></a>
            </div>
        </div>

        <!-- Day 1 -->
        <div id="schedule-day1">
            {% if page.day1 and page.day1.size > 0 %}
                {% for session in page.day1 %}
                    {% include site/agenda-table.inc %}
                {% endfor %}
            {% endif %}
        </div>

        <!-- Day 2 -->
        <div id="schedule-day2">
            {% if page.day2 and page.day2.size > 0 %}
                {% for session in page.day2 %}
                    {% include site/agenda-table.inc %}
                {% endfor %}
            {% endif %}
        </div>


    </div>
</div>