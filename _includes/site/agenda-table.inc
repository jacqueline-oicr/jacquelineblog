<div class="row">
    <div class="col-md-12">
        <h3 class="grey-box">{{ session.title }} </h3>
    </div>
</div>
{% for interval in session.intervals %}
    <div class="row text-center flex">
        <div class=" col-xs-12 col-flex no-right-padding time-box-container">
            <div class="time-boxes {% if interval.highlightBox_b == true %} highlight-box {% endif %}">
                <p class="box-text">{{ interval.time }}</p>
            </div>
        </div>
    <!-- Check for interval activities -->
        {% if interval.activities.size == 1 %}
            {% for activity in interval.activities %}  
                {% if activity.person_txt and activity.imageLink_txt %}
                    <div class="agenda-column">
                        <div class="agenda-row col-xs-12 col-flex no-left-padding no-right-padding">
                                <div class="light-grey-box agenda-detail-box person-col-container">
                                    <div class="activity-title">{{ activity.activity_txt | markdownify}}</div>
                                    {% if activity.activity2_txt %}
                                        <p><i>{{activity.activity2_txt}}</i></p>
                                    {% endif %}
                                    <div class="row padding-top-20 padding-bottom-20 person-row">
                                        <div >
                                            <img class="img-responsive person-image" src="{{activity.imageLink_txt}}">
                                        </div>
                                        <div class="padding-side-20">
                                            {%  if activity.personLink_txt %}
                                            <a href="{{activity.personLink_txt}}"><p class="no-bottom-margin person-txt">{{activity.person_txt |markdownify}}</p></a>
                                            {% else %}
                                            <p class="no-bottom-margin person-txt">{{activity.person_txt |markdownify}}</p>
                                            {% endif %}
                                            <p class="no-bottom-margin light-grey-txt person-description-txt">{{activity.description_txt}}</p>
                                        </div>
                                    </div>
                                    {% if activity.subheading_txt %}
                                    <i><br>
                                        {% for subheading in activity.subheading_txt %}
                                            {% if subheading.personLink_txt %}
                                              <a href="{{subheading.personLink_txt}}"><p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p></a>
                                            {% else %}
                                              <p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p>
                                            {% endif %}
                                        {% endfor %}
                                    </i>
                                    {% endif %}
                                    <!-- <button id="add-schedule"><p>{{page.add-schedule_txt}}</p></button> -->
                            </div>
                        </div>
                    </div>
                {% else %}
                    <div class="agenda-column">
                        <div class="agenda-row col-xs-12 col-flex no-left-padding no-right-padding">
                            <div {% if interval.highlightBox_b == true %} class="highlight-box green-text agenda-detail-box" 
                                {% else %} class="light-grey-box agenda-detail-box" {% endif %}>
                                <div class="agenda-table-padding">
                                    <div class="activity-title">{{ activity.activity_txt | markdownify}}</div>
                                    {% if activity.activity2_txt %}
                                        <p><i>{{activity.activity2_txt}}</i></p>
                                    {% endif %}
                                    {% if activity.subheading_txt %}
                                        <i><br>
                                        {% for subheading in activity.subheading_txt %}
                                            {% if subheading.personLink_txt %}
                                              <a href="{{subheading.personLink_txt}}"><p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p></a>
                                            {% else %}
                                              <p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p>
                                            {% endif %}
                                        {% endfor %}
                                        </i>
                                    {% endif %}
                                </div>
                                <!-- <button id="add-schedule"><p>{{page.add-schedule_txt}}</p></button> -->
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        {% else %}
        <div class="agenda-column">
            {% for activity in interval.activities %}
                <div class="agenda-row col-xs-12 col-flex no-left-padding no-right-padding {% if forloop.index != 3 %}no-right-padding{% endif %}">
                    <div {% if interval.highlightBox_b == true %} class="highlight-box green-text agenda-detail-box" 
                    {% else %} class="light-grey-box agenda-detail-box" {% endif %}>
                        <div class="activity-title">{{ activity.activity_txt | markdownify}}</div>
                        {% if activity.activity2_txt %}
                            <p><i>{{activity.activity2_txt}}</i></p>
                        {% endif %}
                        {% if activity.subheading_txt %}
                            <i><br>
                            {% for subheading in activity.subheading_txt %}
                                {% if subheading.personLink_txt %}
                                              <a href="{{subheading.personLink_txt}}"><p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p></a>
                                            {% else %}
                                              <p class="no-bottom-margin light-grey-txt">{{subheading.person | markdownify}}</p>
                                            {% endif %}
                            {% endfor %}
                            </i>
                        {% endif %}
                        <!-- <button id="add-schedule"><p>{{page.add-schedule_txt}}</p></button> -->
                    </div>
                </div>
            {% endfor %}
        </div>
        {% endif %}

        <div class=" col-xs-12 col-flex no-left-padding location-box-container">
            <div class="green-boxes">
                <p class="box-text">{{ interval.location}}</p>
            </div>
        </div>
    </div>
{% endfor %}