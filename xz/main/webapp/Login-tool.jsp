<%--
  Created by IntelliJ IDEA.
  User: xhzxs
  Date: 2021/5/27
  Time: 19:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Objects" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
	String temp;
	String user;
%>
<%
	temp = (String) request.getSession().getAttribute("name");
	user = Objects.requireNonNullElse(temp, "");
%>

<c:if test="${sessionScope.name == null}">
	<div class="user-info header-top-nav__item">
		<div class="dropdown header-top__dropdown">
			<a class="dropdown-toggle" id="userID" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				My Account
				<i class="fa fa-angle-down"></i>
			</a>
			<div class="dropdown-menu" aria-labelledby="userID">
				<a class="dropdown-item" href="login-register.jsp">Log in & Register</a>
				<%--<a class="dropdown-item" href="login-register.jsp">Log In</a>--%>
			</div>
		</div>
	</div>
</c:if>
<c:if test="${sessionScope.name != null}">
	<div class="user-info header-top-nav__item">
		<div class="dropdown header-top__dropdown">
			<a class="dropdown-toggle" <%--id="userID"--%> data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<%=user%>
				<i class="fa fa-angle-down"></i>
			</a>
			<div class="dropdown-menu" aria-labelledby="userID">
					<%--<a class="dropdown-item" href="login-register.jsp">Register</a>--%>
				<a class="dropdown-item" href="LogOutServlet">Log Out</a>
			</div>
		</div>
	</div>
</c:if>
