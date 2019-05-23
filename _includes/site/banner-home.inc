{% assign banner = site._modules | where:"slug", "banner" | first %}

<div id="banner-home">
    <div class="jumbotron">
        <div id="banner-text" class="container">
            <div class="row">
                <div class="title col-md-12 col-sm-12">
                    <h1>{{banner.header_txt}}<span class="name">{{banner.name_txt}}</span></h1>
                    <p id="heading-text">{{banner.heading_txt}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
