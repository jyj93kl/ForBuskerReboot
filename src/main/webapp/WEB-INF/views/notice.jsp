<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="com.platform.notice.*" %>
<%
	Object obj = session.getAttribute("login");
%>
<!doctype html>
<html>
<head>
    <title>For-Busker</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="subject" content="알려드립니다 | 포버스커">
    <meta name="viewport" content="width=1280">
</head>

<body>
    <input type="hidden" value="${sessionScope.login.MEM_EMAIL}" id="session-email"/>
    <div id="root"></div>
    <script src="${pageContext.request.contextPath}/resources/js/react/notice_main.bundle.js"></script>
</body>
</html>