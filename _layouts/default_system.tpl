<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
<head>
{% include core/head.inc %}
{% comment %}{% include site/head.inc %}{% endcomment %}
</head>
<body class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }}">
    {% comment %}{% include site/nav.inc %}{% endcomment %}
    <div id="system-content">
    {{ content }}
    </div>
    {% include site/footer.inc %}
    {% include core/footer_scripts.inc %}
    {% include dist/footer_scripts.inc %}
    {% include site/footer_scripts.inc %}
</body>
</html>