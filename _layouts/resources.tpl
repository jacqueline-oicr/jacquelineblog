---
layout: default
---
{% include site/banner.inc %}

<div id="resources-page">
    <div class="container">
      <div class="row flex-wrap-stretch">
        <div class="col-md-5 col-xs-12">
          <div id="vision-box" class="col-xs-12 grey-border-box resource-box">
            <div class="resource-box-header">
              <div class="resource-icon-container">
                <img alt="" class="icon-resource" src="/assets/site/images/icon-vision.svg" />
              </div>
            </div>
            <div class="resource-box-body">
              <h2 class="resource-title">{{page.visionTitle_txt}}</h2>
              <p class="resource-detail">{{page.vision_txt}}</p>
            </div>
          </div>
          <div id="mission-box" class="col-xs-12 grey-border-box resource-box">
            <div class="resource-box-header">
              <div class="resource-icon-container">
                <img alt="" class="icon-resource" src="/assets/site/images/icon-mission.svg" />
              </div>
            </div>
            <div class="resource-box-body">
              <h2 class="resource-title">{{page.missionTitle_txt}}</h2>
              <p class="resource-detail">{{page.mission_txt}}</p>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="row">
              <div id="leadership-box" class="col-xs-12">
                <a class="leadersihp-link" href="{{page.leadershipLink_txt}}">Learn About Our Leadership</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-xs-12 flex-wrap-stretch">
          <div id="resouce-image-box" class="col-xs-12 flex-center">
            <img alt="" class="img-responsive" src="{{page.blueprintImage_txt}}">
          </div>
        </div>
      </div> 
    </div> 
</div>