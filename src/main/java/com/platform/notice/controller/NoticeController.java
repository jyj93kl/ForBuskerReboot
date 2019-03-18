package com.platform.notice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.platform.notice.service.NoticeService;
import com.platform.notice.vo.NoticeVO;


@Controller
public class NoticeController {
	
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	@Autowired
	private NoticeService service;

	@RequestMapping(value="notice")
	public String noticeList(NoticeVO nvo, Model m) throws Exception{
		
		List<NoticeVO> list = service.noticeMain(nvo);

		m.addAttribute("list", list);
		
		
		return "notice";
			
	}
}
