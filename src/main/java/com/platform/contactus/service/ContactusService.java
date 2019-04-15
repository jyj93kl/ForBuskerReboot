package com.platform.contactus.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.platform.contactus.dao.ContactusDao;

@Service
public class ContactusService {

	@Autowired
	private ContactusDao contactusDao;
	
	public Object addContactus(Map<String, Object> requestMap) {

		return contactusDao.addContactus(requestMap);
	}

}
