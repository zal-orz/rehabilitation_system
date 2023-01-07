<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
    <script type="text/javascript" src="assets/js/Non-login-alert.js"></script>
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
                                    <a href="https://www.twitter.com/" target="_blank" class="social__link">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="https://www.google.com/" target="_blank" class="social__link">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="https://www.facebook.com/" target="_blank" class="social__link">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="https://www.youtube.com/" target="_blank" class="social__link">
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                </li>
                                <li class="social__item">
                                    <a href="https://www.instagram.com/" target="_blank" class="social__link">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                            <p class="header-text">Free shipping on all domestic orders with coupon code <span>“Watches2018”</span></p>
                        </div>
                        <div class="col-lg-4">
                            <div class="header-top-nav d-flex justify-content-lg-end justify-content-center">
                                <%--<div class="language-selector header-top-nav__item">
                                    <div class="dropdown header-top__dropdown">
                                        <a class="dropdown-toggle" id="languageID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            EN-GB
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="languageID">
                                            <a class="dropdown-item" href="#"><img src="assets/img/header/1.jpg" alt="English"> English</a>
                                            <a class="dropdown-item" href="#"><img src="assets/img/header/2.jpg" alt="Français"> Français</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="currency-selector header-top-nav__item">
                                    <div class="dropdown header-top__dropdown">
                                        
                                        <a class="dropdown-toggle" id="currencyID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            USD
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="currencyID">
                                            <a class="dropdown-item" href="#">&euro; Uro</a>
                                            <a class="dropdown-item" href="#">&pound; Pound Sterling</a>
                                            <a class="dropdown-item" href="#">&dollar; Us Dollar</a>
                                        </div>
                                    </div>
                                </div>--%>
                                <%--<div class="user-info header-top-nav__item">
                                    <div class="dropdown header-top__dropdown">
                                        <a class="dropdown-toggle" id="userID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            My Account
                                            <i class="fa fa-angle-down"></i>
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="userID">
                                            <a class="dropdown-item" href="login-register.jsp">Register</a>
                                            <a class="dropdown-item" href="login-register.jsp">Log In</a>
                                        </div>
                                    </div>
                                </div>--%>
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
                            <a href="index.jsp" class="logo-box mb-md--30">
                                <img src="assets/img/logo/logo.png" alt="logo">
                            </a>
                        </div>
                        <div class="col-lg-5 col-md-7 col-sm-6 order-lg-3 order-3">
                            <div class="header-toolbar">
                                <%--<div class="search-form-wrapper search-hide">
                                    <form action="#" class="search-form">
                                        <input type="text" name="search" id="search" class="search-form__input" placeholder="Search entire store here..">
                                        <button type="submit" class="search-form__submit">
                                            <i class="icon_search"></i>
                                        </button>
                                    </form>
                                </div
                                <ul class="header-toolbar-icons">
                                    <li class="search-box">
                                        <a href="#" class="bordered-icon search-btn" aria-expanded="false"><i class="icon_search"></i></a>
                                    </li>>
                                    <li class="wishlist-icon">
                                        <a href="wishlist.jsp" class="bordered-icon"><i class="fa fa-heart"></i></a>
                                    </li>
                                    <li class="mini-cart-icon">
                                        <div class="mini-cart mini-cart--1">
                                            <a class="mini-cart__dropdown-toggle bordered-icon" id="cartDropdown">
                                                <span class="mini-cart__count">0</span>
                                                <i class="icon_cart_alt mini-cart__icon"></i>
                                                <span class="mini-cart__ammount">80.00 <i class="fa fa-angle-down"></i></span>
                                            </a>
                                            <div class="mini-cart__dropdown-menu">
                                                <div class="mini-cart__content" id="miniCart">
                                                    <div class="mini-cart__item">
                                                        <div class="mini-cart__item--single">
                                                            <div class="mini-cart__item--image">
                                                                <img src="assets/img/products/1-1-450x450.jpg" alt="product">
                                                            </div>
                                                            <div class="mini-cart__item--content">
                                                                <h4 class="mini-cart__item--name"><a href="product-details.jsp">Dell Inspiron 24</a> </h4>
                                                                <p class="mini-cart__item--quantity">x1</p>
                                                                <p class="mini-cart__item--price">$100.00</p>
                                                            </div>
                                                            <a class="mini-cart__item--remove" href=""><i class="icon_close"></i></a>
                                                        </div>
                                                        <div class="mini-cart__item--single">
                                                            <div class="mini-cart__item--image">
                                                                <img src="assets/img/products/2-2-450x450.jpg" alt="product">
                                                            </div>
                                                            <div class="mini-cart__item--content">
                                                                <h4 class="mini-cart__item--name"><a href="product-details.jsp">Acer Aspire AIO <br>-<small>Color Swatch Black</small></a> </h4>
                                                                <p class="mini-cart__item--quantity">x1</p>
                                                                <p class="mini-cart__item--price">$100.00</p>
                                                            </div>
                                                            <a class="mini-cart__item--remove" href=""><i class="icon_close"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="mini-cart__calculation">
                                                        <p>
                                                            <span class="mini-cart__calculation--item">Sub-Total :</span>
                                                            <span class="mini-cart__calculation--ammount">$1,070.00</span>
                                                        </p>
                                                        <p>
                                                            <span class="mini-cart__calculation--item">Eco Tax (-2.00) :</span>
                                                            <span class="mini-cart__calculation--ammount">$4.00</span>
                                                        </p>
                                                        <p>
                                                            <span class="mini-cart__calculation--item">Eco VAT (20%) :</span>
                                                            <span class="mini-cart__calculation--ammount">$214.00</span>
                                                        </p>
                                                        <p>
                                                            <span class="mini-cart__calculation--item">Eco Total :</span>
                                                            <span class="mini-cart__calculation--ammount"> $1,288.00</span>
                                                        </p>
                                                    </div>
                                                    <div class="mini-cart__btn">
                                                        <a href="cart.jsp" class="btn btn-fullwidth btn-style-1">View Cart</a>
                                                        <a href="checkout.jsp" class="btn btn-fullwidth btn-style-1">Checkout</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>--%>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <%--<div class="header-bottom header-top-1 position-relative navigation-wrap fixed-header">
                <div class="container position-static">
                    <div class="row">
                        <div class="col-12 position-static text-center">
                            <nav class="main-navigation">
                                <ul class="mainmenu">
                                    <li class="mainmenu__item &lt;%&ndash;active menu-item-has-children has-children&ndash;%&gt;">
                                        <a href="index.jsp" class="mainmenu__link">Home</a>
                                        &lt;%&ndash;<ul class="sub-menu">
                                            <li><a href="index.jsp">Home 1</a></li>
                                            <li><a href="index-2.jsp">Home 2</a></li>
                                            <li><a href="index-3.jsp">Home 3</a></li>
                                            <li><a href="index-4.jsp">Home 4</a></li>
                                        </ul>&ndash;%&gt;
                                    </li>
                                    <li class="mainmenu__item &lt;%&ndash;menu-item-has-children&ndash;%&gt;">
                                        <a href="shop.jsp" class="mainmenu__link">Shop</a>
                                        &lt;%&ndash;<ul class="megamenu five-column">
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
                                        </ul>&ndash;%&gt;
                                    </li>
                                    <li class="mainmenu__item &lt;%&ndash;menu-item-has-children has-children&ndash;%&gt;">
                                        <a href="blog.jsp" class="mainmenu__link">Blog</a>
                                        &lt;%&ndash;<ul class="sub-menu">
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
                                        </ul>&ndash;%&gt;
                                    </li>
                                    &lt;%&ndash;<li class="mainmenu__item menu-item-has-children has-children">
                                        <a href="#" class="mainmenu__link">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="cart.jsp">Cart</a></li>
                                            <li><a href="checkout.jsp">Checkout</a></li>
                                            <li><a href="compare.jsp">compare</a></li>
                                            <li><a href="wishlist.jsp">wishlist</a></li>
                                            <li><a href="my-account.jsp">my account</a></li>
                                            <li><a href="404.jsp">404</a></li>
                                            <li><a href="faq.jsp">Faq</a></li>
                                            <li><a href="login-register.jsp">Login Register</a></li>
                                        </ul>
                                    </li>&ndash;%&gt;
                                    <li class="mainmenu__item">
                                        <a href="about.jsp" class="mainmenu__link">About Us</a>
                                    </li>
                                    <li class="mainmenu__item">
                                        <a href="contact.jsp" class="mainmenu__link">contact Us</a>
                                    </li>
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
            </div>--%>
            <jsp:include page="Navigation-Bar.jsp"/>
        </header>
        <!-- Header Area End -->

        <!-- Breadcumb area Start -->
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="page-title">About Us</h1>
                        <%--<ul class="breadcrumb justify-content-center">
                            <li><a href="index.jsp">Home</a></li>
                            <li class="current"><a href="shop.jsp">About</a></li>
                        </ul>--%>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcumb area End -->

        <!-- Main Wrapper Start -->
        <div class="main-content-wrapper">
            <div class="about-area bg--dark-3 mt--40 mt-sm--30">
                <div class="container-fluid p-0">
                    <div class="row no-gutters align-items-center">
                        <div class="col-xl-6">
                            <div class="img-box text-center">
                                <img src="assets/img/about/about-us-img1.jpg" alt="about">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="row">
                                <div class="col-10 offset-1">
                                    <div class="about-text text-center">
                                        <h2 class="heading-secondary mb--40 mb-sm--30">
                                            About Us
                                        </h2>
                                        <p class="mb--40 mb-sm--30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
                                        <%--<div class="about-btn-group text-center">
                                            <a href="portfolio.html" class="btn btn-style-3">view work</a>
                                        </div>--%>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fact-area">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-3 col-sm-6">
                            <div class="fact">
                                <div class="fact__icon">
                                    <img src="assets/img/icons/about-us-icon1.png" alt="about icon">
                                </div>
                                <div class="fact__content">
                                    <h3><span class="counter">2169</span></h3>
                                    <p>HAPPY CUSTOMERS</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="fact">
                                <div class="fact__icon">
                                    <img src="assets/img/icons/about-us-icon2.png" alt="about icon">
                                </div>
                                <div class="fact__content">
                                    <h3><span class="counter">869</span></h3>
                                    <p>AWARDS WON</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="fact">
                                <div class="fact__icon">
                                    <img src="assets/img/icons/about-us-icon3.png" alt="about icon">
                                </div>
                                <div class="fact__content">
                                    <h3><span class="counter">689</span></h3>
                                    <p>HOURS WORKED</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="fact">
                                <div class="fact__icon">
                                    <img src="assets/img/icons/about-us-icon4.png" alt="about icon">
                                </div>
                                <div class="fact__content">
                                    <h3><span class="counter">2500</span></h3>
                                    <p>COMPLETE PROJECTS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-area bg--dark-3">
                <div class="container-fluid p-0">
                    <div class="row no-gutters align-items-center">
                        <div class="col-xl-6">
                            <div class="row">
                                <div class="col-sm-9 offset-sm-2 col-10 offset-1">
                                    <div class="skill-progress">
                                        <h2 class="heading-secondary heading-secondary--2 mb--40">
                                            WE HAVE SKILLS TO SHOW
                                        </h2>
                                        <div class="skill-progress__single">
                                            <span class="skill-progress__title">html/css</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span>90%</span></div>
                                            </div>
                                        </div>
                                        <div class="skill-progress__single">
                                            <span class="skill-progress__title">wordpress</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span>85%</span></div>
                                            </div>
                                        </div>
                                        <div class="skill-progress__single">
                                            <span class="skill-progress__title">typhography</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"><span>70%</span></div>
                                            </div>
                                        </div>
                                        <div class="skill-progress__single">
                                            <span class="skill-progress__title">branding</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><span>95%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="img-box text-center">
                                <img src="assets/img/about/about-us-img2.jpg" alt="about image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main Wrapper End -->

        <!-- Footer Start -->
        <%--<footer class="footer border-top ptb--40 ptb-md--30">
            <div class="container">
                <div class="row mb--40 mb-md--30">
                    <div class="col-lg-8 col-md-6 mb-md--30" style="margin: 0 auto; text-align: center">
                        <div class="footer-widget">
                            <h3 class="widget-title">About Mirora</h3>
                            <div class="widget-content mb--20">
                                <p>Address: 123 Main Street, Anytown, CA 12345 - USA.    Phone: (012) 800 456 789</p>
                                <p>Fax: (012) 800 456 789    Email: Contact@plazathemes.com</p>
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
                    &lt;%&ndash;<div class="col-lg-3 col-md-6 mb-md--30">
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
                    </div>&ndash;%&gt;
                    &lt;%&ndash;<div class="col-lg-4 col-md-6">
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
                    </div>&ndash;%&gt;
                </div>
                &lt;%&ndash;<div class="row mb--40 mb-md--30">
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
                </div>&ndash;%&gt;
            </div>
        </footer>--%>
        <jsp:include page="footer-bar.jsp"/>
        <!-- Footer End -->

        <!-- Scroll To Top Start -->    
        <a class="scroll-to-top" href=""><i class="fa fa-angle-double-up"></i></a>
        <!-- Scroll To Top End -->

        <!-- Popup Subscribe Box Start -->

        <div class="popup-subscribe-box" id="subscribe-popup">
            <div class="popup-subscribe-box-content">
                <div class="popup-subscribe-box-body">
                    <a href="#subscribe-popup" class="popup-close">close</a>
                    <h3>NEWSLETTER</h3>
                    <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
                    <form class="popup-subscribe-form validate" action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                        <input type="email" name="popup-subscribe-email" id="popup-subscribe-email" placeholder="Enter your email here...">
                        <input type="submit" value="Subscribe" class="btn subscribe-btn btn-medium btn-style-1">
                        <div class="form-group text-center mt--20">
                            <input type="checkbox" name="hide-popup" id="hide-popup">
                            <label for="hide-popup"> Don't show this popup again </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Popup Subscribe Box End -->

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
                                        <a href="wishlist.jsp">+Add to wishlist</a>
                                        <a href="compare.jsp">+Add to compare</a>
                                    </div>
                                </div>  
                                <p class="product-tags">
                                    Tags: <a href="shop.jsp">Sport</a>,
                                    <a href="shop.jsp">Luxury</a>
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
