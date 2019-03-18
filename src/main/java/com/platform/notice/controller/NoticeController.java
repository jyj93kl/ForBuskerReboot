package com.platform.notice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.platform.notice.service.NoticeService;
import com.platform.notice.vo.NoticeVO;


@Controller
public class NoticeController {
	
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	@Autowired
	private NoticeService service;

	@RequestMapping(value="/notice/noticeMain.do")
	public ModelAndView noticeList(NoticeVO nvo, ModelAndView modelAndView) throws Exception{
		
		List<NoticeVO> list = service.noticeMain(nvo);

		modelAndView.addObject("list", list);
		
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
			
	}
}
