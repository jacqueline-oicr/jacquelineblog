---
layout: default
---

{% include site/breadcrumb.inc %}
<div id="talk-details">
  <div class="container">
    <div class="row">
        <div class="title-row bottom-border col-md-12 col-sm-12 col-xs-12">
            <img class="title-icon" src="/assets/site/images/icon-talks.svg">
            <h1 class="talk-name">{{page.title}}</h1>
        </div>
    </div>
    <div class="row bottom-border talk-info">
        <div class="col-xs-12">
            <h2><b>{{page.date-time_txt}}</b></h2>
            <div class="tags-container">
            {% if page.categories_list and page.categories_list != '' %}
                {% for item in page.categories_list %}
                    <span class="tags">{{item.category_txt}}</span>
                {% endfor %}
            {% endif %}
            </div>
            <a href="{{page.speakerLink_txt}}">{{page.speakerName_txt}}</a>
            <p>{{page.speakerTitle_txt}}</p>
        </div>
    </div>

    {% if page.about_txt != "" and page.objective_txt != "" and page.audience_txt != "" and page.takeaways_list != "" %}
        <div class="row">
            <div class="col-md-6">
                <h2> Overview </h2>
                <p> {{page.about_txt | markdownify}} </p>
                <h2> Objective </h2>
                <p> {{page.objective_txt | markdownify}} </p>
            </div>
            <div class="col-md-6">
                <h2> Target Audience </h2>
                <p> {{page.audience_txt | markdownify}} </p>
                <h2> Key Takeaways </h2>
                <ul>
                    {% for item in page.takeaways_list %}
                    <li> {{item.takeaway_txt}} </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    {% else %}
        <div class="row">
            <div class="col-md-6 blurred">
                <h2> Overview </h2>
                <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2> Objective </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="col-md-6 blurred">
                <h2> Target Audience </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <h2> Key Takeaways </h2>
                <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    <li> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </li>
                    <li> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </li>
                </ul>
            </div>
        </div>
        <div class="coming-soon">
            <div class="coming-soon-container">
                <h1>Content coming soon...</h1>
                <p>We Strive to create high quality content.</p>
                <p>Please submit content updates to <a href="mailto:pat@oicr.on.ca">pat@oicr.on.ca</a></p>
            </div>
        </div>

    {% endif %}
  </div> 
</div>