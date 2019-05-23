---
layout: default
---
{% include site/banner.inc %}
<div id="talks-page">
    <div id="talks-container"></div>
<!--
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
        <div class="row talks-row">
            <div id="news-box-isotope" class="news-box-isotope-grid wfui-isotope-grid card-grid row">
                {% assign count = 0 %}
                {% for talk in page.talks_list %}
                    <div id={{ "news-box-isotope-item-" | append: count}} data-item="false" class="card-container news-box-isotope-item {{count}}  wfui-isotope-item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="card-box">
                            <p class="title"> {{ talk.title_txt }} </p>
                            <div class="description"> {{ talk.description_txt }} 
                                <a href="{{ talk.href_txt }}">...Read More</a>
                                <div class="tag">
                                    {% for tag in talk.tag_list %}
                                        <button class ="btn btn-default"> 
                                            <span> {{ tag.tag_txt }} </span>
                                        </button>
                                    {% endfor %}
                                </div>
                            </div>
                            <p class="speaker-name"> {{ talk.speaker_txt }} </p>
                            <p class="speaker-title"> {{ talk.speakerTitle_txt }} </p>
                        </div>
                    </div>
                    {% assign count = count | plus: 1 %}
                {% endfor %}
            </div>
        </div>
    </div>
-->
</div>
