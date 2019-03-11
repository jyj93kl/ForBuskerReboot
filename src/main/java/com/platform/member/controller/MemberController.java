package com.platform.member.controller;

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

import com.platform.controller.HomeController;
import com.platform.member.service.MemberService;

@Controller
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	private MemberService memberSerivce;
	
	@RequestMapping(value = "/member/addMember.do", method = RequestMethod.POST)
	public ModelAndView initObjectTree(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) {

		logger.info("axios Call : /member/addMember.do requestMap : " + requestMap.toString());
		
		Object result = memberSerivce.addMember(requestMap);
				
		if(result instanceof Exception) {
			modelAndView.addObject("errorMsg", ((Exception)result).getMessage());
			modelAndView.addObject("errorCode", -100);
		}else {
			modelAndView.addObject("returnData", result);
		}
		
		modelAndView.setViewName("jsonView");
		return modelAndView;
	}
	
}
