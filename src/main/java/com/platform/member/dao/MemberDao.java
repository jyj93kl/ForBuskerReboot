package com.platform.member.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public Object addMember(Map<String, Object> requestMap) {
		// TODO Auto-generated method stub
		return sqlSession.insert("common.addMember",requestMap);
	}

}
