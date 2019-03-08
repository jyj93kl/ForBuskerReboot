package com.platform.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.dao.HomeDao;

@Service
public class HomeService {

	@Autowired
	private HomeDao homeDao;
	
	public Object returnTest(Map requestMap){
		return homeDao.connection(requestMap);
	}
}
