package com.platform.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HomeDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public Object connection(Map requestMap) {
		return sqlSession.selectList("common.connection",requestMap);
	}
	
}
