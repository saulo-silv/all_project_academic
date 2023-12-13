package com.ifce.br.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ifce.br.model.Pessoa;
import com.ifce.br.service.PessoaService;

@Controller
@RequestMapping("/pessoa")
public class PessoaController {
	@Autowired
	private PessoaService servicePessoa;
	
	@GetMapping("/olaMundo")
	public String olaMundo() {
		return "ola-mundo";
	}
	@GetMapping("/formulario")
	public String formulario() {
		return "formulario";
	}
	@PostMapping("/salvar")
	public String salvar(Pessoa pessoa) {
		servicePessoa.cadastrarPessoa(pessoa);
		return "sucesso";
	}
	@GetMapping("/listar")
	public ModelAndView listarPessoas() {
		List<Pessoa> pessoas= servicePessoa.listarPessoas();
		ModelAndView mv = new ModelAndView("listagem-pessoa"); 
		mv.addObject("listaPessoas",pessoas);
		return mv;
	}
}
