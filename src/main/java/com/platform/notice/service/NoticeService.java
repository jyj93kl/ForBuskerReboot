package com.platform.notice.service;

import java.util.List;
import java.util.Map;

import com.platform.notice.vo.NoticeVO;

public interface NoticeService {

	public List<NoticeVO> noticeMain(NoticeVO nvo) throws Exception;

	public Object addNotice(Map<String, Object> requestMap) throws Exception;
}
