package com.platform.notice.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.notice.dao.NoticeDao;

@Service
public class NoticeService {

	
	@Autowired
	private NoticeDao noticeDao;
	
	public Object noticeMain(Map<String, Object> requestMap) {

		
		return noticeDao.noticeMain(requestMap);
	}

	public Object noticeAdd(Map<String, Object> requestMap) {

		return noticeDao.noticeAdd(requestMap);
	}

	public Object noticeView(Map<String, Object> requestMap) {

		return noticeDao.noticeView(requestMap);
	}
}
