package com.platform.notice.dao;

import java.util.List;

import com.platform.notice.vo.NoticeVO;

public interface NoticeDao {
	
	// 게시글 리스트
	public List<NoticeVO> noticeMain(NoticeVO nvo);

}
