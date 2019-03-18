package com.platform.notice.vo;

import java.util.Date;

public class NoticeVO {
	private int noticeNo;
	private String noticeTitle;
	private String noticeContent;
	private String noticeCategori;
	private String noticeWriter;
	private Date noticeDate;
	
	
	
	public int getNoticeNo() {
		return noticeNo;
	}
	public void setNoticeNo(int noticeNo) {
		this.noticeNo = noticeNo;
	}
	public String getNoticeTitle() {
		return noticeTitle;
	}
	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}
	public String getNoticeContent() {
		return noticeContent;
	}
	public void setNoticeContent(String noticeContent) {
		this.noticeContent = noticeContent;
	}
	public String getNoticeCategori() {
		return noticeCategori;
	}
	public void setNoticeCategori(String noticeCategori) {
		this.noticeCategori = noticeCategori;
	}
	public String getNoticeWriter() {
		return noticeWriter;
	}
	public void setNoticeWriter(String noticeWriter) {
		this.noticeWriter = noticeWriter;
	}
	public Date getNoticeDate() {
		return noticeDate;
	}
	public void setNoticeDate(Date noticeDate) {
		this.noticeDate = noticeDate;
	}
	
	
	
}
