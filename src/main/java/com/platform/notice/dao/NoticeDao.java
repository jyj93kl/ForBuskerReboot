package com.platform.notice.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class NoticeDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public Object noticeMain(Map<String, Object> requestMap) {
		
		return sqlSession.selectList("common.noticeMain", requestMap);
	}

	public Object noticeAdd(Map<String, Object> requestMap) {

		return sqlSession.insert("common.noticeAdd", requestMap);
	}

	public Object noticeView(Map<String, Object> requestMap) {

		return sqlSession.selectOne("common.noticeView", requestMap);
	}

	public Object noticeUpdate(Map<String, Object> requestMap) {

		return sqlSession.update("common.noticeUpdate", requestMap);
	}

	public Object noticeDelete(Map<String, Object> requestMap) {

		return sqlSession.delete("common.noticeDelete", requestMap);
	}

	public Object noticeSearch(Map<String, Object> requestMap) {

		return sqlSession.selectList("common.noticeSearch", requestMap);
	}

}
