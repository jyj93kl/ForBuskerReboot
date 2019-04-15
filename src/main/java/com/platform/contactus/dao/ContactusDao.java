package com.platform.contactus.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ContactusDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public Object addContactus(Map<String, Object> requestMap) {
		
		return sqlSession.insert("common.addContactus", requestMap);
	}
	
}
