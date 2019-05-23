<meta charset="utf-8">
<title>{% if page.tabTitle_txt %}{{ page.tabTitle_txt | escape }}{% elsif page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}</title>
<meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<link rel="stylesheet" href="/assets/core/css/styles.css?{{ "now" | date: "%s" }}">
<link rel="stylesheet" href="/assets/dist/css/core.bundle.css?{{ "now" | date: "%s" }}">
<link rel="stylesheet" href="/assets/site/css/styles.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.8.5/css/froala_editor.pkgd.min.css">
<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Nunito' type='text/css' />
<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="shortcut icon" href="/favicon_oicr.png" type="image/x-icon">

<script src="/assets/site/js/env_theme.js?{{ "now" | date: "%s" }}"></script>

<!--
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
-->