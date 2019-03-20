package com.platform.notice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.notice.dao.NoticeDao;
import com.platform.notice.vo.NoticeVO;

@Service
public class NoticeServiceImpl implements NoticeService {
	
	@Autowired
	private NoticeDao dao;
	
	
	@Override
	public List<NoticeVO> noticeMain(NoticeVO nvo) throws Exception {

		
		return dao.noticeMain(nvo);
	}
}