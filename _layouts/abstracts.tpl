---
layout: default
---
{% include site/banner.inc %}
<div id="abstracts-page">
    <div id="abstracts-container"></div>
<!--
<div id="abstracts-page">
    <div class="container">
        <div class="row header-row">
            <div class="col-md-9">
                <h1> {{ page.title }} </h1>
            </div>
            <div class="col-md-3">
                <input class="form-control" type="text" placeholder="{{ page.search_txt }}" aria-label="Search">
            </div>
        </div>
        <div class="row filters-row">
            <div id="news-filter" class="section">
                <div class="container">
                    <div class="row filter-wrapper">
                        {% for type in page.filter_types_list %}
                            <div class="row">
                                {{ type.title_txt }}
                                {% for filter in type.filters_list %}
                                    <div class="filter-item">
                                        <button class="btn btn-default btn-filter" data-toggle="button">
                                            {{ filter.filter_txt }}
                                        </button>
                                    </div>
                                {% endfor %}
                            </div>
                            <br>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
        <div class="row abstracts-row">
            <div id="news-box-isotope" class="news-box-isotope-grid wfui-isotope-grid card-grid row">
                {% assign count = 0 %}
                {% for abstract in page.abstracts_list %}
                    <div id={{ "news-box-isotope-item-" | append: count}} data-item="false" class="card-container news-box-isotope-item {{count}}  wfui-isotope-item col-lg-4 col-md-4 col-sm-4 col-xs-6">
                        <div class="card-box">
                            <div class="poster">
                                <img class="poster-img" src="{{ abstract.img_txt }}">
                                <a href="{{ abstract.img_txt }}" download><img class="download-icon" src="{{ page.downloadIcon_txt }}"></a>
                            </div>
                            <p class="title"><a href="{{ abstract.href_txt }}">{{ abstract.title_txt }}</a></p>
                            <p class="authors"> {{ abstract.authors_txt }} </p>
                        </div>
                    </div>
                    {% assign count = count | plus: 1 %}
                {% endfor %}
            </div>
        </div>
    </div>
</div>
-->
