{% assign footer = site._modules | where:"slug", "footer" | first %}

<footer class="site-footer">
  <div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="footer-logo">
						<img src={{footer.iconimg_txt}}>
					</div>
					<div class="footer-icons">
						{% for item in footer.contact_list %} 
							<a class="icon-img" href={{item.link_txt}}><img src={{item.link_img}}/></a>
						{% endfor %}
						</div>
					</div>
				</div>
			</div>
		</div>
</footer>


