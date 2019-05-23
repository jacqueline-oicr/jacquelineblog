<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
<head>
{% comment %}{% include core/head.inc %}{% endcomment %}
{% include site/head.inc %}
</head>
<body class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }}">
    {% include site/nav.inc %}

    <div id="editButton" data-path="{{ page.path }}" data-is-public="{{ page.isPublic_b }}"></div>
    <div id="public-pages">
        <main>
            {% include core/token_replace.inc content=content %}
        </main>
    </div>
    {% include core/back_to_top.inc %}
    {% include site/footer.inc %}
    {% comment %}{% include core/footer_scripts.inc %}{% endcomment %}
    {% include dist/footer_scripts.inc %}
    {% include site/footer_scripts.inc %}
</body>
</html>