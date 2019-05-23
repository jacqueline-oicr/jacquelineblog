{% assign nav = site._modules | where:"slug", "nav" | first %}
<div id="navigation" class="navigation container-shadow">
    <nav id="sticky-nav" class="navbar nav-main navbar-no-border">
        <div id="nav-container" class="container">
            {% if nav.nav-logo-link and nav.nav-logo-link.size > 0 %}
                <div role="presentation" id="nav-item-title">
                    <a class="nav-link" href="/">
                        {% if page.title == 'About' %}
                            <img id="logo-img" src={{nav.nav-logo-link}}>
                        {% endif %}
                        <p id="logo-text">{{nav.site-title_txt}}<br>{{nav.site-title_txt2}}</p>
                    </a>
                </div>
            {% endif %}
            <div class="navbar-header">
                <div id="nav-mobile">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                        <div class="btn-open">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </div>
                        <div class="btn-close">
                            <span class="icon-close"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div class="row collapse navbar-collapse" id="navbar-collapse-1">

                {% if nav.nav_list and nav.nav_list.size > 0 %}
                    <div id="menu-main-menu">
                        <ul id="nav-main-menu" class="my-navbar nav navbar-nav">
                            {% for item in nav.nav_list %}
                                <li role="presentation" class="nav-item">
                                    <a class="nav-link" href={{item.link_txt}}>{{item.title_txt}}</a>
                                </li>
                            {% endfor %}
                        </ul>
                    </div>
                {% endif %}
            </div>
        </div>
    </nav>
</div>