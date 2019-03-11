package com.platform.member.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.platform.member.dao.MemberDao;

@Service
public class MemberService {

	@Autowired
	private MemberDao memberDao;
	
	public Object addMember(Map<String, Object> requestMap) {

		try {
			memberDao.addMember(requestMap);
		} catch (Exception e) {
			e.printStackTrace();
			return e;
		}
		
		return HttpStatus.OK;
	}

}
