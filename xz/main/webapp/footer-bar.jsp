<%--
  Created by IntelliJ IDEA.
  User: xhzxs
  Date: 2021/5/30
  Time: 20:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script src="assets/js/vendor/jquery.min.js"></script>
<footer class="footer border-top ptb--40 ptb-md--30">
	<div class="container">
		<div class="row mb--40 mb-md--30">
			<div class="col-lg-8 col-md-6 mb-md--30" style="margin: 0 auto; text-align: center">
				<div class="footer-widget">
					<h3 class="widget-title">About Mirora</h3>
					<div class="widget-content mb--20">
						<p>Address: 123 Main Street, Anytown, CA 12345 - USA.    Phone: (012) 800 456 789</p>
						<p>Fax: (012) 800 456 789    Email: Contact@plazathemes.com</p>
						<%
							Integer hitsCount = (Integer) application.getAttribute("hitCounter");
							if (hitsCount == null || hitsCount == 0) {
								hitsCount = 1;
							} else {
								hitsCount += 1;
							}
							application.setAttribute("hitCounter", hitsCount);
						%>
						<p>&copy;&nbsp;Page views:&nbsp;<%=hitsCount%>&nbsp;Class:&nbsp;183-2&nbsp;<%--Name:&nbsp;宋梦承--%></p>
						<script type="text/javascript">
                            $(function () {
                                var t = null;
                                t = setTimeout(time, 1000);//開始运行
                                function time() {
                                    clearTimeout(t);//清除定时器
                                    dt = new Date();
                                    var year = dt.getFullYear();
                                    var month = dt.getMonth();//(0-11,0代表1月)
                                    var date = dt.getDate();//获取天
                                    var num_day = dt.getDay();//获取星期
                                    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                    var monthday = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                    var hour = dt.getHours();//获取时
                                    var minute = dt.getMinutes();//获取分
                                    var second = dt.getSeconds();//获取秒
                                    //分秒时间是一位数字，在数字前补0。
                                    date = extra(date);
                                    //month = extra(month);
                                    minute = extra(minute);
                                    second = extra(second);
                                    //document.getElementById("start").innerHTML = year + " - " + monthday[month] + " - " + date + " " + hour + "：" + minute + " : " + second + " " + weekday[num_day];
                                    document.getElementById("start").innerHTML = monthday[month] + "&nbsp;" + date + ",&nbsp;" + year + ".&nbsp;" + "&nbsp;" + hour + "&nbsp;:&nbsp;" + minute + "&nbsp;:&nbsp;" + second + ".&nbsp;" + weekday[num_day];
                                    t = setTimeout(time, 1000); //设定定时器，循环运行
                                }
                            });
                            //补位函数。
                            function extra(x) {
                                //如果传入数字小于10，数字前补一位0。
                                if (x < 10) {
                                    return "0" + x;
                                }
                                else {
                                    return x;
                                }
                            }
						</script>
						<p id="start"></p>
					</div>
					<ul class="social social-round">
						<li class="social__item">
							<a class="social__link" href="https://www.facebook.com/" target="_blank">
								<i class="fa fa-facebook"></i>
							</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="https://twitter.com/" target="_blank">
								<i class="fa fa-twitter"></i>
							</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="https://www.youtube.com/" target="_blank">
								<i class="fa fa-youtube"></i>
							</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="https://www.instagram.com/" target="_blank">
								<i class="fa fa-instagram"></i>
							</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="https://www.google.com/" target="_blank">
								<i class="fa fa-google-plus"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<%--<div class="col-lg-3 col-md-6 mb-md--30">
				<div class="footer-widget">
					<h3 class="widget-title">Information</h3>
					<ul class="widget-menu">
						<li><a href="">About Us</a></li>
						<li><a href="">Delivery Information</a></li>
						<li><a href="">Privacy Policy</a></li>
						<li><a href="">Terms &amp; Conditions</a></li>
						<li><a href="">Gift Certificates</a></li>
						<li><a href="">Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 mb-sm--30">
				<div class="footer-widget">
					<h3 class="widget-title">Extras</h3>
					<ul class="widget-menu">
						<li><a href="">Brands</a></li>
						<li><a href="">Gift Certificates</a></li>
						<li><a href="">Affiliate</a></li>
						<li><a href="">Specials</a></li>
						<li><a href="">My Account</a></li>
						<li><a href="">Returns</a></li>
					</ul>
				</div>
			</div>--%>
			<%--<div class="col-lg-4 col-md-6">
				<div class="footer-widget">
					<h3 class="widget-title">Custom Products</h3>
					<div class="widget-product">
						<div class="product">
							<div class="product-img">
								<img src="assets/img/products/11-450x450.jpg" alt="products">
							</div>
							<div class="product-content">
								<div class="product-rating">
									<span>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star"></i>
									</span>
								</div>
								<h4 class="product-title">
									<a href="product-details.jsp" tabindex="0">Acer Aspire E 15</a>
								</h4>
								<div class="product-price-wrapper">
									<span class="money">$550.00</span>
									<span class="product-price-old">
										<span class="money">$700.00</span>
									</span>
								</div>
							</div>
						</div>
						<div class="product">
							<div class="product-img">
								<img src="assets/img/products/11-450x450.jpg" alt="products">
							</div>
							<div class="product-content">
								<div class="product-rating">
									<span>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star theme-star"></i>
										<i class="fa fa-star"></i>
									</span>
								</div>
								<h4 class="product-title">
									<a href="product-details.jsp" tabindex="0">Acer Aspire E 15</a>
								</h4>
								<div class="product-price-wrapper">
									<span class="money">$550.00</span>
									<span class="product-price-old">
										<span class="money">$700.00</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>--%>
		</div>
		<%--<div class="row mb--40 mb-md--30">
			<div class="col-12">
				<ul class="footer-menu">
					<li><a href="">Home</a></li>
					<li><a href="">Online Store</a></li>
					<li><a href="">Promotion</a></li>
					<li><a href="">Privacy Policy</a></li>
					<li><a href="">Terms Of Use</a></li>
					<li><a href="">Sitemap</a></li>
					<li><a href="">Support</a></li>
					<li><a href="">Contacts</a></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-12 text-center">
				<p class="copyright-text"></p>
				<img src="assets/img/others/payment.png" alt="payment">
			</div>
		</div>--%>
	</div>
</footer>
