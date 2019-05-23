---
layout: default
---

{% include site/breadcrumb.inc %}
<div id="speaker-details">
  <div class="container">
    <div class="row">
      <div class="title-row bottom-border col-xs-12">
          <img class="title-icon" src="/assets/site/images/icon-person black.svg">
          <h1 class="speaker-name">{{page.title}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-12">
        <div class="full-width">

          {% if page.image_txt and page.image_txt != '' %}
            <img class="speaker-img img-responsive" src="{{page.image_txt}}">
          {% else %}
            <div class="initial-box">
              <div class="initial-circle">
                <div class="initials">{{page.firstName_txt | slice: 0 | upcase }}{{page.lastName_txt | slice: 0 | upcase }}</div>
              </div>
            </div>
          {% endif %}

          {% if page.socialMedia_list and page.socialMedia_list != "" %}
            <div class="social-media-container">
            <p class="social">Social media:</p>
              {% for link in page.socialMedia_list %}
                <a href="{{link.link_txt}}"><img src="{{link.linkImage_txt}}"></a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 speaker">
          <h2> {{page.position_txt}}</h2>
          <h4><i>{{page.organization_txt}}</i></h4>
          <p> {{page.about_txt | markdownify}} </p>
          <div class="websites">
            {% if page.websites_list and page.websites_list.size > 0 and page.websites_list[0] and page.websites_list[0].link_txt and page.websites_list[0].link_txt.size > 0 %}
              <p>Websites:</p>
              {% for item in page.websites_list %}
                  <a href="{{item.link_txt}}">{{item.link_txt}}</a>
              {% endfor %}
            {% endif %}
          </div>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-12">
          <div class="full-width bottom-border">
              <h2> Talks </h2>
              <div class="talk-title">{{page.talk_txt | markdownify}}</div>
          </div>
      </div>
    </div>
  </div>
</div> 