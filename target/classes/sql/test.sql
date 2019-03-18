CREATE TABLE dept (
    deptno               int  NOT NULL  AUTO_INCREMENT,
    dname                varchar(20)    ,
    loc                  varchar(20)    ,
    CONSTRAINT pk_dept PRIMARY KEY ( deptno )
 ) engine=InnoDB;
 
CREATE TABLE emp (
    empno                int  NOT NULL  AUTO_INCREMENT,
    ename                varchar(20)    ,
    job                  varchar(20),
    mgr                  smallint    ,
    sal                  numeric(7,2)    ,
    comm                 numeric(7,2)    ,
    deptno               int    ,
    CONSTRAINT pk_emp PRIMARY KEY ( empno )
 ) engine=InnoDB;
 
insert into dept values(10, 'ACCOUNTING', 'NEW YORK');
insert into dept values(20, 'RESEARCH', 'DALLAS');
insert into dept values(30, 'SALES', 'CHICAGO');
insert into dept values(40, 'OPERATIONS', 'BOSTON');
   
insert into emp values( 7839, 'KING', 'PRESIDENT', null, 5000, null, 10);
insert into emp values( 7698, 'BLAKE', 'MANAGER', 7839, 2850, null, 30);
insert into emp values( 7782, 'CLARK', 'MANAGER', 7839, 2450, null, 10);
insert into emp values( 7566, 'JONES', 'MANAGER', 7839, 2975, null, 20);
insert into emp values( 7788, 'SCOTT', 'ANALYST', 7566, 3000, null, 20);
insert into emp values( 7902, 'FORD', 'ANALYST', 7566,  3000, null, 20);
insert into emp values( 7369, 'SMITH', 'CLERK', 7902,  800, null, 20);
insert into emp values( 7499, 'ALLEN', 'SALESMAN', 7698, 1600, 300, 30);
insert into emp values( 7521, 'WARD', 'SALESMAN', 7698, 1250, 500, 30);
insert into emp values( 7654, 'MARTIN', 'SALESMAN', 7698, 1250, 1400, 30);
insert into emp values( 7844, 'TURNER', 'SALESMAN', 7698, 1500, 0, 30);
insert into emp values( 7876, 'ADAMS', 'CLERK', 7788, 1100, null, 20);
insert into emp values( 7900, 'JAMES', 'CLERK', 7698, 950, null, 30);
insert into emp values( 7934, 'MILLER', 'CLERK', 7782, 1300, null, 10);
   
   
CREATE TABLE MEMBER (
    MEM_NO int  NOT NULL  AUTO_INCREMENT,
    MEM_EMAIL varchar(100),
    MEM_PW varchar(100),
    MEM_NAME varchar(100),
    MEM_TEL  varchar(100),
    MEM_BIRTHDAY varchar(100),
    CONSTRAINT PK_MEM_NO PRIMARY KEY ( MEM_NO )
 ) engine=InnoDB;


 CREATE TABLE NOTICE (
  NOTICE_NO INT NOT NULL AUTO_INCREMENT,
  NOTICE_TITLE VARCHAR(100),
  NOTICE_DATE DATE,
  NOTICE_CATEGORI VARCHAR(45),
  NOTICE_WRITER VARCHAR(45),
  NOTICE_CONTENT VARCHAR(2000),
  CONSTRAINT PK_MEM_NO PRIMARY KEY ( NOTICE_NO )
  ) engine=InnoDB;


CREATE TABLE FAQ (
  FAQ_NO INT NOT NULL AUTO_INCREMENT,
  FAQ_TITLE VARCHAR(45),
  FAQ_DATE DATE,
  FAQ_CATEGORI VARCHAR(45),
  FAQ_WRITER VARCHAR(45),
  FAQ_CONTENT VARCHAR(2000),
  CONSTRAINT PK_MEM_NO PRIMARY KEY ( FAQ_NO )
  ) engine=InnoDB;

