---
layout: default
---
{% include site/banner.inc %}

<div id="accommodation-page">
  <div class="container">
      <div class = "row padding-top-30">
          <div class="col-md-6 col-xs-12">
              <h2>{{page.kingbridgeTitle_txt}}</h2>
              <p>{{page.kingbridge_txt | markdownify }}</p>
          </div>
          <div class="col-md-6 col-xs-12">
              <img class="img-responsive" src="{{page.kingbridgeImage2_txt}}">
          </div>
      </div>
      <div class="row padding-top-30">
          <div class="col-md-6 col-xs-12">
              <img class="img-responsive" src="{{page.kingbridgeImage_txt}}">
          </div>
          <div class="col-md-6 col-xs-12">
              <h2 class="no-margin-top payment-title">{{page.paymentTitle_txt}}</h2> 
              <p>{{page.payment_txt| markdownify }}</p>
              <h2 class="padding-top-20">{{page.reimbursementTitle_txt}}</h2> 
              <p>{{page.reimbursement_txt| markdownify }}</p>
          </div>
      </div>
  </div>
</div>

