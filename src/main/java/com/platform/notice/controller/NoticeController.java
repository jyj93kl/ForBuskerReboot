package com.platform.notice.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
	
	@RequestMapping(value = "/notice/addNotice.do", method = RequestMethod.POST)
	public ModelAndView noticeAdd(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) throws Exception {

		logger.info("axios Call : /notice/addNotice.do requestMap : " + requestMap.toString());
		
		Object result = service.addNotice(requestMap);
				
		if(result instanceof Exception) {
			modelAndView.addObject("errorMsg", ((Exception)result).getMessage());
			modelAndView.addObject("errorCode", -100);
		} else {
			modelAndView.addObject("returnData", result);
		}
		
		modelAndView.setViewName("jsonView");
		return modelAndView;
	}
}
