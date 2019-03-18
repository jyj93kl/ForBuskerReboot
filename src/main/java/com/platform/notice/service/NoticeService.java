package com.platform.notice.service;

import java.util.List;

import com.platform.notice.vo.NoticeVO;

public interface NoticeService {

	public List<NoticeVO> noticeMain(NoticeVO nvo) throws Exception;
}
