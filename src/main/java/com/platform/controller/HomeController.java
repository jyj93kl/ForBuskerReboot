package com.platform.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.platform.service.HomeService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	HomeService homeService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	
	@RequestMapping("/{name}")
    public String page(@PathVariable String name, Model model) {
        
//		logger.info("page move : " + name);
		
//		model.addAttribute("pageName", name);
        return "index";
    }
	
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public ModelAndView initObjectTree(HttpServletRequest request, ModelAndView modelAndView, @RequestBody Map<String, Object> requestMap) {

		logger.info("axios test /users call");
		
		Object result = homeService.returnTest(requestMap);
				
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
