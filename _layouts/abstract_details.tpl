---
layout: default
---

{% include site/banner.inc %}
<div id="abstract-details">
  <div class="container">
    <div class="row">
        <div class="title-row bottom-border col-md-12 col-sm-12 col-xs-12">
          <img class="title-icon" src="/assets/site/images/document-img.svg">
          <h1 class="abstract-name">{{page.title}}</h1>
        </div>
    </div>
    <div class="row">
      <div class="bottom-border col-md-12 col-sm-12 col-xs-12">
        <h2>POSTER NO: {{page.posternumber_ti}}</h2>
        {% if page.categories_list and page.categories_list != '' %}
        <div class="tags-container">
          {% for item in page.categories_list %}
              <span class="tags">{{item.category_txt}}</span>
          {% endfor %}
        {% endif %}
        </div>
        <h5>{{page.presenting-author_txt}}</h5>
        <p class="no-margin-top"><i>{{page.presenting-author-title_txt}}</i></p>
        <div class="email-row">
            <img class="email-icon" src="/assets/site/images/icon-email.svg">
            <a href="mailto:{{page.presenting-author-email_txt}}"><p class="email-text">{{page.presenting-author-email_txt}}</p></a>
        </div>
        
      </div>
    </div>

    <div class="row bottom-border">
        <div class="col-md-6">

            <h5> Authors: </h5> 
            <p class="text-with-superscripts">
                {% for item in page.authors_list %}
                  {{item.author_txt}}{% if item.reference %}<sup>{{item.reference}}</sup>{% endif %}{% if forloop.last == false %},{% endif %} 
                {% endfor %}
            </p>
            <h5> Author Affiliations: </h5> 
            <p class="text-with-superscripts">
                {% for item in page.affiliations_list %}
                  {% if item.reference %}<sup>{{item.reference}}</sup>{% endif %}{{item.affiliation_txt}}{% if forloop.last == false %},{% endif %}
                {% endfor %}
            </p> 
        </div>
        <div class="col-md-6">
            <h5> Abstract Text: </h5> 
            <p>{{page.text_txt | markdownify }}</p> 
        </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h5 class="keywords-text"><i>Keywords: </i>{{page.keywords_txt}}</h5>
      </div>
    </div>
  </div> 
</div>    