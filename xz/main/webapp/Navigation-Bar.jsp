<%--
  Created by IntelliJ IDEA.
  User: xhzxs
  Date: 2021/5/27
  Time: 19:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="header-bottom header-top-1 position-relative navigation-wrap fixed-header">
	<div class="container position-static">
		<div class="row">
			<div class="col-12 position-static text-center">
				<nav class="main-navigation">
					<ul class="mainmenu">
						<li class="mainmenu__item <%--active menu-item-has-children has-children--%>">
							<a href="index.jsp" class="mainmenu__link">Home</a>
							<%--<ul class="sub-menu">
								<li><a href="index.jsp">Home 1</a></li>
								<li><a href="index-2.jsp">Home 2</a></li>
								<li><a href="index-3.jsp">Home 3</a></li>
								<li><a href="index-4.jsp">Home 4</a></li>
							</ul>--%>
						</li>
						<c:if test="${sessionScope.name != null}">
							<li class="mainmenu__item <%--menu-item-has-children--%>">
								<a href="ShopServlet" class="mainmenu__link">Shop</a>
							</li>
						</c:if>
						<c:if test="${sessionScope.name == null}">
							<li class="mainmenu__item <%--menu-item-has-children--%>">
								<a onclick="nonLoginAlert()" href="" class="mainmenu__link">Shop</a>
							</li>
						</c:if>
						<%--<ul class="megamenu five-column">
							<li>
								<a class="megamenu-title" href="#">Shop Grid</a>
								<ul>
									<li>
										<a href="shop.jsp">Left Sidebar</a>
									</li>
									<li>
										<a href="shop-right-sidebar.jsp">Right Sidebar</a>
									</li>
									<li>
										<a href="shop-fullwidth.jsp">Three Column</a>
									</li>
									<li>
										<a href="shop-fullwidth-4-column.jsp">Four Column</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="megamenu-title" href="#">Shop List</a>
								<ul>
									<li>
										<a href="shop-list-left-sidebar.jsp">Left Sidebar</a>
									</li>
									<li>
										<a href="shop-list-right-sidebar.jsp">Right Sidebar</a>
									</li>
									<li>
										<a href="shop-list.jsp">Full width</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="megamenu-title" href="#">Single Product</a>
								<ul>
									<li>
										<a href="product-details.jsp">Standard Product</a>
									</li>
									<li>
										<a href="product-details-variable.jsp">Variable Product</a>
									</li>
									<li>
										<a href="product-details-group.jsp">Group Product</a>
									</li>
									<li>
										<a href="product-details-affiliate.jsp">Affiliate Product</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="megamenu-title" href="#">Single Product</a>
								<ul>
									<li>
										<a href="product-details.jsp">Tab Style One</a>
									</li>
									<li>
										<a href="product-details-tab-style-2.jsp">Tab Style Two</a>
									</li>
									<li>
										<a href="product-details-tab-style-3.jsp">Tab Style Three</a>
									</li>
									<li>
										<a href="product-details-sticky-left.jsp">Sticky Left</a>
									</li>
									<li>
										<a href="product-details-sticky-right.jsp">Sticky Right</a>
									</li>
								</ul>
							</li>
							<li>
								<a class="megamenu-title" href="#">Single Product</a>
								<ul>
									<li>
										<a href="product-details-gallery-left.jsp">Gallery Left</a>
									</li>
									<li>
										<a href="product-details-gallery-right.jsp">Gallery Right</a>
									</li>
									<li>
										<a href="product-details-slider-box.jsp">Slider Box</a>
									</li>
									<li>
										<a href="product-details-slider-full-width.jsp">Full Width Slider</a>
									</li>
								</ul>
							</li>
						</ul>--%>
						<li class="mainmenu__item <%--menu-item-has-children has-children--%>">
							<a href="blog.jsp" class="mainmenu__link">Blog</a>
							<%--<ul class="sub-menu">
								<li class="menu-item-has-children has-children">
									<a href="#">Blog Grid</a>
									<ul class="sub-menu">
										<li><a href="blog.jsp">Left Sidebar</a></li>
										<li><a href="blog-right-sidebar.jsp">Right Sidebar</a></li>
										<li><a href="blog-3-column.jsp">Three Column</a></li>
										<li><a href="blog-4-column.jsp">Four Column</a></li>
									</ul>
								</li>
								<li class="menu-item-has-children has-children">
									<a href="#">Blog List</a>
									<ul class="sub-menu">
										<li><a href="blog-list.jsp">Full Width</a></li>
										<li><a href="blog-list-left-sidebar.jsp">left Sidebar</a></li>
										<li><a href="blog-list-right-sidebar.jsp">Right Sidebar</a></li>
									</ul>
								</li>
								<li class="menu-item-has-children has-children">
									<a href="#">Blog Details</a>
									<ul class="sub-menu">
										<li><a href="blog-details-image.jsp">Standard Post</a></li>
										<li><a href="blog-details-image.jsp">Image Post</a></li>
										<li><a href="blog-details-audio.jsp">Audio Post</a></li>
										<li><a href="blog-details-video.jsp">Video Post</a></li>
										<li><a href="blog-details-gallery.jsp">Gallery Post</a></li>
										<li><a href="blog-details-right-sidebar.jsp">Right Sidebar</a></li>
									</ul>
								</li>
							</ul>--%>
						</li>
						<c:if test="${sessionScope.name == null}">
							<li class="mainmenu__item">
								<a onclick="nonLoginAlert()" href="" class="mainmenu__link">Cart</a>
							</li>
						</c:if>
						<c:if test="${sessionScope.name != null}">
							<li class="mainmenu__item">
								<a href="CheckCartServlet" class="mainmenu__link">Cart</a>
							</li>
						</c:if>
<%--							<ul class="sub-menu">--%>
<%--								<li><a href="CheckCartServlet">Cart</a></li>--%>
<%--								<li><a href="checkout.jsp">Checkout</a></li>--%>
<%--								<li><a href="compare.jsp">compare</a></li>--%>
<%--								<li><a href="wishlist.jsp">wishlist</a></li>--%>
<%--								<li><a href="my-account.jsp">my account</a></li>--%>
<%--								<li><a href="404.jsp">404</a></li>--%>
<%--								<li><a href="faq.jsp">Faq</a></li>--%>
<%--								<li><a href="login-register.jsp">Login Register</a></li>--%>
<%--							</ul>--%>
						
						<li class="mainmenu__item">
							<a href="about.jsp" class="mainmenu__link">About Us</a>
						</li>
						<c:if test="${sessionScope.name == null}">
							<li class="mainmenu__item">
								<a onclick="nonLoginAlert()" href="" class="mainmenu__link">contact Us</a>
							</li>
						</c:if>
						<c:if test="${sessionScope.name != null}">
							<li class="mainmenu__item">
								<a href="contact.jsp" class="mainmenu__link">contact Us</a>
							</li>
						</c:if>
					</ul>
				</nav>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col-12">
				<div class="mobile-menu"></div>
			</div>
		</div>
	</div>
</div>