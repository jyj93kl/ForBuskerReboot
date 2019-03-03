## 통합 공연 관련 플랫폼

### 개발 도구

BackEnd  :  Spring MVC <br/>
FrontEnd :  React.js <br/>
개발 DB   :  MySQL <br/>
hosting  :  Tomcat <br/>

<br/>
<hr/>
<br/>

### 대상

일반 사용자 ,
공연 관련자(버스킹,일반 콘서트 등등) ,
제휴 등등 광고 후원해주는 사용자 ( 후원자, 광고자 )

<br/>

해당 플랫폼은 큰 공연(콘서트,뮤지컬 등)에서부터 작은 공연(버스킹,작은 소규모 공연 등)까지 모든 정보를 볼 수 있고
공연을 진행하는 사람들과 공연을 보는 사람들 간의 소통할수있는 공간을 제공

<br/>
<hr/>
<br/>

### 카테고리분류
<br/>
* 팬 커뮤니티 (트게더 : https://tgd.kr/)<br/>
* 콜라보레이션 (버스킹 같이할 사람 찾기)<br/>
* 공연 예정 정보<br/>
* 버스킹 동영상<br/>
*


<br/>
<hr/>
<br/>

### 기능

기본 기능		: [로그인, id/pw 찾기, 회원가입, 공지사항, Q&A] <br/>
메인페이지 기능	: [유튜브 라이브 스트리밍(onoff 기능, 후원하기 (아프리카 별풍선)), 공연 예정 정보, 버스킹 동영상, 검색] <br/><br/>




* 메인페이지 <br/><br/>

* 서브페이지<br/><br/>





##### 프로젝트 구조
~~~
|-- ForBusker
    |-- src/main/java
        |-- com.platform.controller
            |--
        |-- com.platform.service
            |--
    |-- src/main/resources
    |-- node_modules
    |-- src
        |-- main
            |-- webapp
        	      |-- resources
        		        |-- css
        		        |-- js
        			          |-- react
        				            |-- main.bundle.js
        		        |-- images
        	      |-- WEB-INF
        		        |-- spring
        		        |-- views
        			          |-- jsx
        				            |-- main.jsx
                    |-- web.xml
        |-- test
    |-- target
    |-- package-lock.json
    |-- package.json
    |-- pom.xml
    |-- webpack.config.js
~~~
