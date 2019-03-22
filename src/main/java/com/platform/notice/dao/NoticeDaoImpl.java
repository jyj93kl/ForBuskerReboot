package com.platform.notice.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.platform.notice.vo.NoticeVO;

@Repository
public class NoticeDaoImpl implements NoticeDao {

	@Autowired
	private SqlSessionTemplate ss;
	
	@Override
	public List<NoticeVO> noticeMain(NoticeVO nvo) {
		return ss.selectList("common.noticeMain",nvo);
	}

	@Override
	public Object addNotice(Map<String, Object> requestMap) {

		return ss.insert("common.addNotice", requestMap);
	}
	

}
