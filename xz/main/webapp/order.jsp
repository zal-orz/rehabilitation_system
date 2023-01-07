<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="com.ytu.it.smc.JavaWeb_02.DAO.CartDataDao" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="meta description">
    <!-- Favicons -->

    <link rel="apple-touch-icon" href="assets/img/icon.png">

    <!-- Title -->
    <title></title>

    <!-- ************************* CSS Files ************************* -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">

    <!-- Elegent Icon CSS -->
    <link rel="stylesheet" href="assets/css/elegent-icons.css">

    <!-- All Plugins CSS css -->
    <link rel="stylesheet" href="assets/css/plugins.css">

    <!-- style css -->
    <link rel="stylesheet" href="assets/css/main.css">

    <!-- modernizr JS
    ============================================ -->
    <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
    <!--[if lt IE 9]>
    <script src="http://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>




<!-- Main Wrapper Start -->
<div class="wrapper bg--shaft">
    <!-- Header Area Start -->
    <header class="header headery-style-1">
        <div class="header-top header-top-1">
            <div class="container">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-8 d-flex align-items-center flex-column flex-lg-row">
                        <ul class="social social-round mr--20">
                            <li class="social__item">
                                <a href="twitter.com" class="social__link">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="plus.google.com" class="social__link">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="facebook.com" class="social__link">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="youtube.com" class="social__link">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="instagram.com" class="social__link">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        <p class="header-text">Free shipping on all domestic orders with coupon code <span>“Watches2018”</span></p>
                    </div>
                    <div class="col-lg-4">
                        <div class="header-top-nav d-flex justify-content-lg-end justify-content-center">

                            <jsp:include page="Login-tool.jsp"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle header-top-1">
            <div class="container">
                <div class="row no-gutters align-items-center">
                    <div class="col-md-5 col-sm-6 order-lg-1 order-2">
                        <div class="contact-info">
                            <img src="assets/img/icons/icon_phone.png" alt="Phone Icon">
                            <p>Call us <br> Free Support: (012) 800 456 789</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-12 order-lg-2 order-1 text-center">
                        <a href="index.html" class="logo-box mb-md--30">
                            <img src="assets/img/logo/logo.png" alt="logo">
                        </a>
                    </div>
                    <div class="col-lg-5 col-md-7 col-sm-6 order-lg-3 order-3">
                        <div class="header-toolbar">
                            <div class="search-form-wrapper search-hide">
                                <c:if test="${sessionScope.name == null}">
                                    <form class="search-form">
                                        <input type="text" name="search" <%--id="search"--%> class="search-form__input" placeholder="Search entire store here..">
                                        <button onclick="nonLoginAlert()" class="search-form__submit">
                                            <i class="icon_search"></i>
                                        </button>
                                    </form>
                                </c:if>
                                <c:if test="${sessionScope.name != null}">
                                    <form action="SearchServlet" class="search-form">
                                        <input type="text" name="search" id="search" class="search-form__input" placeholder="Search entire store here..">
                                        <button type="submit" class="search-form__submit">
                                            <i class="icon_search"></i>
                                        </button>
                                    </form>
                                </c:if>
                            </div>
                            <ul class="header-toolbar-icons">
                                <li class="search-box">
                                    <a href="#" class="bordered-icon search-btn" aria-expanded="false"><i class="icon_search"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <jsp:include page="Navigation-Bar.jsp"/>
    </header>
    <div class="breadcrumb-area" style="margin: 0 auto">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center" style="margin: 0 auto">
                    <div style="height:auto;width:auto; margin: 0 auto">
                        <div id="zhifu" style="text-align: center; margin: 0 auto; width:400px;height:400px; ">
                            <p>Scan QR code to pay for your order</p>
                            <%--<%String totalprice=request.getParameter("totalprice"); %>--%>
                            <%
                                CartDataDao cartDataDao = new CartDataDao();
                                Double totalprice = cartDataDao.gettotalprice((String) request.getSession().getAttribute("name"));
                            %>
                            <p style = "color:#FFA500;font-size:25px;text-align:center;margin:0 auto">$<%=totalprice%></p>
            
                            <img src="assets/img/pay/QR.png" style="width:300px ; height:300px;margin:20px auto"/>
                            <div style="margin:10px auto;height:30px; width:200px;align:center;">
                                <%--<img src = "assets/img/pay/saomiao.png" style="width:50px ; height:50px; float:left"/>--%>
                                <div style="float:right">
		                            <span>Open mobile Alipay<br>Scan to continue payment</span>
                                </div>
                            </div>
                        </div>
                        <%--        <div style="float:right;width:250px;background-color:#E6E6E6;height:1000px" >--%>
        
                        <%--            <img src="assets/img/zhifu/diannao.jpg" style="text-align:center;margin:100px 30px 50px ;"/>--%>
                        <%--            <div style="text-align:center;margin:0px 30px;">--%>
                        <%--                <span >我的余额：</span><span style="color:red">99999</span></div></div>--%>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="footer-bar.jsp"/>
</div>

    <!-- Scroll To Top Start -->
    <a class="scroll-to-top" href=""><i class="fa fa-angle-double-up"></i></a>
    <!-- Scroll To Top End -->
    
   

    <!-- Modal Start -->
    <div class="modal fade product-modal" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">Close</span>
                    </button>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-6 mb-sm--20">
                                <div class="tab-content product-thumb-large">
                                    <div id="thumb1" class="tab-pane active show fade">
                                        <img src="assets/img/products/1-1-600x600.jpg" alt="product thumb">
                                    </div>
                                    <div id="thumb2" class="tab-pane fade">
                                        <img src="assets/img/products/2-600x600.jpg" alt="product thumb">
                                    </div>
                                    <div id="thumb3" class="tab-pane fade">
                                        <img src="assets/img/products/10-600x600.jpg" alt="product thumb">
                                    </div>
                                    <div id="thumb4" class="tab-pane fade">
                                        <img src="assets/img/products/11-600x600.jpg" alt="product thumb">
                                    </div>
                                    <div id="thumb5" class="tab-pane fade">
                                        <img src="assets/img/products/12-600x600.jpg" alt="product thumb">
                                    </div>
                                    <div id="thumb6" class="tab-pane fade">
                                        <img src="assets/img/products/13-600x600.jpg" alt="product thumb">
                                    </div>
                                </div>
                                <div class="product-thumbnail">
                                    <div class="thumb-menu" id="modal-thumbmenu">
                                        <div class="thumb-menu-item">
                                            <a href="#thumb1" data-toggle="tab" class="nav-link active">
                                                <img src="assets/img/products/1-1-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                        <div class="thumb-menu-item">
                                            <a href="#thumb2" data-toggle="tab" class="nav-link">
                                                <img src="assets/img/products/2-2-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                        <div class="thumb-menu-item">
                                            <a href="#thumb3" data-toggle="tab" class="nav-link">
                                                <img src="assets/img/products/10-10-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                        <div class="thumb-menu-item">
                                            <a href="#thumb4" data-toggle="tab" class="nav-link">
                                                <img src="assets/img/products/11-11-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                        <div class="thumb-menu-item">
                                            <a href="#thumb5" data-toggle="tab" class="nav-link">
                                                <img src="assets/img/products/12-12-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                        <div class="thumb-menu-item">
                                            <a href="#thumb6" data-toggle="tab" class="nav-link">
                                                <img src="assets/img/products/13-13-450x450.jpg" alt="product thumb">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6">
                                <div class="modal-box product">
                                    <h3 class="product-title">Acer Aspire E 15</h3>
                                    <div class="ratings mb--20">
                                        <i class="fa fa-star rated"></i>
                                        <i class="fa fa-star rated"></i>
                                        <i class="fa fa-star rated"></i>
                                        <i class="fa fa-star rated"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <ul class="product-detail-list list-unstyled mb--20">
                                        <li>Brand: <a href="">Apple</a></li>
                                        <li>Product Code: Watches</li>
                                        <li>Reward Points: 600</li>
                                        <li>Availability: In Stock</li>
                                    </ul>
                                    <div class="product-price border-bottom pb--20 mb--20">
                                        <span class="regular-price">$100.50</span>
                                        <span class="sale-price">$98.98</span>
                                    </div>
                                    <div class="product-options mb--20">
                                        <h3>Available Options</h3>
                                        <div class="form-group">
                                            <label><sup>*</sup>Color Switch</label>
                                            <select>
                                                <option> --- Please Select --- </option>
                                                <option>Black</option>
                                                <option>Blue</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="product-action-wrapper mb--20">
                                        <div class="product-action-top d-flex align-items-center mb--20">
                                            <div class="quantity">
                                                <span>Qty: </span>
                                                <input type="number" class="quantity-input" name="qty" id="qty" value="1" min="1">
                                            </div>
                                            <button type="button" class="btn btn-medium btn-style-2 add-to-cart">
                                                Add To Cart
                                            </button>
                                        </div>
                                        <div class="product-action-bottom">
                                            <a href="wishlist.html">+Add to wishlist</a>
                                            <a href="compare.html">+Add to compare</a>
                                        </div>
                                    </div>
                                    <p class="product-tags">
                                        Tags: <a href="shop.html">Sport</a>,
                                        <a href="shop.html">Luxury</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal End -->

</div>
<!-- Main Wrapper End -->


<!-- ************************* JS Files ************************* -->

<!-- jQuery JS -->
<script src="assets/js/vendor/jquery.min.js"></script>

<!-- Bootstrap and Popper Bundle JS -->
<script src="assets/js/bootstrap.bundle.min.js"></script>

<!-- All Plugins Js -->
<script src="assets/js/plugins.js"></script>
<!-- Ajax Mail Js -->
<script src="assets/js/ajax-mail.js"></script>

<!-- Main JS -->
<script src="assets/js/main.js"></script>

</body>

</html>
