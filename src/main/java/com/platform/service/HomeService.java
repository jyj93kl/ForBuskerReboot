package com.platform.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public class HomeService {

	public Object returnTest(){
		HashMap hm = new HashMap();
		hm.put("test_trans_1", "1");
		hm.put("test_trans_2", "2");
		hm.put("test_trans_3", "3");
		hm.put("test_trans_4", "4");
		hm.put("test_trans_5", "5");
		return hm;
	}
}
