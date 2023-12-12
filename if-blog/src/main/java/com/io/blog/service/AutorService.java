package com.io.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.io.blog.model.Autor;
import com.io.blog.repository.AutorRepository;

@Service
public class AutorService {
	
	@Autowired
	private AutorRepository repositoryAutor;

	public void cadastrarAutor(Autor autor) {
		repositoryAutor.save(autor);
		
	}

	

}
