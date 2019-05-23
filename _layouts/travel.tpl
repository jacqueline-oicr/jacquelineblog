---
layout: default
---
{% include site/banner.inc %}

<div id="travel-page">
  <div class="container">
    <div class="row padding-top-30">
      <div class="col-md-6 col-xs-12">
        <div class="row">
          <div class="col-xs-12">
            <img class="img-responsive" src = "{{page.travelImage_txt}}">
            <div class="caption">
              <p> {{page.imageCaption_txt}} </p>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="full-width bottom-border">
              <h2> {{page.busTitle_txt}} </h2>
              <p> {{page.bus_txt | markdownify}} </p>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="full-width bottom-border">
              <h2> {{page.busScheduleTitle_txt}} </h2>
              <p> {{page.busSchedule_txt | markdownify}} </p>
              <div class = "content-box-green-border">
                {% for item in page.busSchedule_list %}
                  <div class="full-width flex-no-wrap">
                    <h4> {{item.date_txt | markdownify}} </h4>
                  </div>
                  {% for interval in item.times_list %}
                  <div class="full-width flex-no-wrap">
                    <div class="bus-time">
                      <p> {{interval.time_txt | markdownify}} </p>
                    </div>
                    <div class="bus-detail">
                      <p> {{interval.description_txt | markdownify}} </p>
                    </div>
                  </div>
                  {% endfor %}
                {% endfor %}
              </div>
              <p> {{page.busSchedule2_txt | markdownify}} </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 col-xs-12">
        <div class="row">
          <div class="col-xs-12">
            <div class="full-width bottom-border">
              <h2 class="no-margin-top"> {{page.roadTitle_txt}} </h2>
              <p> {{page.road_txt | markdownify}} </p>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="full-width bottom-border">
              <h2> {{page.reimbursementTitle_txt}} </h2>
              <p> {{page.reimbursement_txt | markdownify}} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>