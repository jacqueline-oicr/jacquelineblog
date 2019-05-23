{% assign nav = site._modules | where:"slug", "nav" | first %}

<div id="breadcrumb">
    <div class="container">
        <div class="row">
            <div class="breadcrumbs-tab">
                <a href="/"><p>Home</p></a>
                
                {% for item in nav.nav_list %}
                    {% if page.permalink != item.link_txt %}

                        {% assign link_txt = page.permalink | split: '/' %}
                        {% for link in link_txt %}
                            {% assign link_comparable = '/' | append: link | append: '/' %}

                            {% if link_comparable == item.link_txt %}
                                <img class="breadcrumb-img" src="/assets/site/images/breadcrumbs-arrow.svg">
                                <a href="{{item.link_txt}}" class="breadcrumb-link {%if item.reserveQuery_b %}reserve-query{% endif %}"><p>{{item.title_txt}}</p></a>
                            {% endif %} 
                        {% endfor %}
                    {% endif %} 
                {% endfor %}
                
                    <img class="breadcrumb-img" src="/assets/site/images/breadcrumbs-arrow.svg">
                    <p>{% if page.tabTitle_txt %}{{page.tabTitle_txt}}{% else %}{{page.title}}{% endif %}</p>
            </div>
        </div>
    </div>
</div>
