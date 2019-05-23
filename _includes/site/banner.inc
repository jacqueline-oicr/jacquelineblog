{% assign banner = site._modules | where:"slug", "banner" | first %}

<div id="banner">
    <div class="jumbotron">
        <div id="banner-text" class="container">
            <div class="row">
                <div class="title col-md-12 col-sm-12">
                    {% if page.tabTitle_txt %}
                        <h1>{{page.tabTitle_txt}}</h1>
                    {% else %}
                        <p>Nothing to see here.</p>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>