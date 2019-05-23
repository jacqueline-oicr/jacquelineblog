---
layout: default
---
{% include site/banner.inc %}
<div id="speakers-page">
    <div id="speakers-container"></div>
<!--
<div id="speakers-page">
    <div class="container">
        <div class="row header-row">
            <div class="col-md-9">
                <h1>{{ page.title }}</h1>
            </div>
            <div class="col-md-3">
                <input class="form-control" type="text" placeholder="{{ page.search_txt }}" aria-label="Search">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12 filters-col">
                <div id="news-filter" class="section">
                    {% comment %}<div class="container">{% endcomment %}
                        {% for type in page.filter_types_list %}
                            <div class="row filter-wrapper">
                                <h4> {{ type.title_txt }} </h4>
                                <div class="row">
                                    {% for filter in type.filters_list %}
                                        <div class="filter-item">
                                            <button class="btn btn-default btn-filter" data-toggle="button">
                                                {{ filter.filter_txt }}
                                            </button>
                                        </div>
                                    {% endfor %}
                                </div>
                            </div>
                            <br>
                        {% endfor %}
                    {% comment %}</div>{% endcomment %}
                </div>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-12 speakers-col">
                <div id="news-box-isotope" class="news-box-isotope-grid wfui-isotope-grid card-grid row">
                    {% assign count = 0 %}
                    {% for speaker in page.speakers_list %}
                        <div id={{ "news-box-isotope-item-" | append: count}} data-item="false" class="card-container news-box-isotope-item {{count}}  wfui-isotope-item col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div class="card-box">
                                <img class="img-responsive" src= {{ speaker.speakerImage_txt }}>
                                <p><a href= {{ speaker.href_txt }}> {{ speaker.name_txt }} </a></p>
                                <p class="institute"> {{ speaker.institute_txt }} </p>
                            </div>
                        </div>
                        {% assign count = count | plus: 1 %}
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</div>
-->
