package com.io.blog.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.io.blog.model.Autor;
import com.io.blog.service.AutorService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/autor")
public class AutorController {
	
	@Autowired
	private AutorService serviceAutor;
	
	@PostMapping("/salvar")
	public String salvar(@RequestBody Autor autor) {
		try {
			System.out.println(autor);
			serviceAutor.cadastrarAutor(autor);
			return "{\"status\":\"Usuário cadastrado com sucesso\"}";
		} catch (Exception e) {
			return "{\"status\":\"Erro no cadastro\"}";
		}

	}
	
}

