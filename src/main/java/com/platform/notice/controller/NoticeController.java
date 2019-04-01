package com.platform.notice.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.platform.notice.service.NoticeService;


@Controller
public class NoticeController {
	
	private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);
	
	@Autowired
	private NoticeService service;
	
	
	@RequestMapping(value="/notice/noticeMain.do", method = RequestMethod.POST)
	public ModelAndView noticeList(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap, HttpSession session) {
		
		logger.info("axios Call : /notice/noticeMain.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeMain(requestMap);
		
		if (result != null) {
			modelAndView.addObject("returnData", result);
			modelAndView.addObject("message", "notice_ok");
		}
		else {
			modelAndView.addObject("message", "login_no");

		}
		
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
	}

	
	@RequestMapping(value = "/notice/addNotice.do", method = RequestMethod.POST)
	public ModelAndView noticeAdd(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) throws Exception {

		logger.info("axios Call : /notice/addNotice.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeAdd(requestMap);
				
		if(result instanceof Exception) {
			modelAndView.addObject("errorMsg", ((Exception)result).getMessage());
			modelAndView.addObject("errorCode", -100);
		} else {
			modelAndView.addObject("returnData", result);
		}
		
		modelAndView.setViewName("jsonView");
		return modelAndView;
	}
	
	
	@RequestMapping(value="/notice/noticeView.do", method = RequestMethod.POST)
	public ModelAndView noticeView(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap, HttpSession session) {
		
		logger.info("axios Call : /notice/noticeView.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeView(requestMap);
		
		modelAndView.addObject("returnData", result);
		
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
	}
	
	
	@RequestMapping(value = "/notice/updateNotice.do", method = RequestMethod.POST)
	public ModelAndView noticeUpdate(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) throws Exception {

		logger.info("axios Call : /notice/updateNotice.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeUpdate(requestMap);
				
		if(result instanceof Exception) {
			modelAndView.addObject("errorMsg", ((Exception)result).getMessage());
			modelAndView.addObject("errorCode", -100);
		} else {
			modelAndView.addObject("returnData", result);
		}
		
		modelAndView.setViewName("jsonView");
		return modelAndView;
	}
	
	
	@RequestMapping(value="/notice/noticeDelete.do", method = RequestMethod.POST)
	public ModelAndView noticeDelete(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap, HttpSession session) {
		
		logger.info("axios Call : /notice/noticeDelete.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeDelete(requestMap);
		
		modelAndView.addObject("returnData", result);
		
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
	}
	
	
	@RequestMapping(value="/notice/noticeSearch.do", method = RequestMethod.POST)
	public ModelAndView noticeSearch(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) {
		
		logger.info("axios Call : /notice/noticeSearch.do requestMap : " + requestMap.toString());
		
		Object result = service.noticeSearch(requestMap);
		
		modelAndView.addObject("returnData", result);
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
	}
	
	
}
