<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%
	Object obj = session.getAttribute("login");
%>
<!doctype html>
<html>
<head>
    <title>For-Busker</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="subject" content="공지사항 | 포버스커">
    <meta name="viewport" content="width=1280">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</head>

<body>
    <div id="root"></div>
    <input type="hidden" value="${sessionScope.login.MEM_EMAIL}" id="session-email"/>
    <input type="hidden" value="${sessionScope.login.MEM_LEVEL}" id="session-level"/>
    <script src="${pageContext.request.contextPath}/resources/js/react/${name}.bundle.js"></script>
</body>
</html>