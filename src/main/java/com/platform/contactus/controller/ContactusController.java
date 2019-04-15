package com.platform.contactus.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.platform.contactus.service.ContactusService;

@Controller
public class ContactusController {
	
	@Autowired 
	ContactusService contactusService;
	
	@RequestMapping(value="/notice/addContactus.do", method = RequestMethod.POST)
	public ModelAndView addContactus(ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) {
		
		Object result = contactusService.addContactus(requestMap);
		
		modelAndView.addObject("returnData", result);
		modelAndView.setViewName("jsonView");
		
		return modelAndView;
	}
}
