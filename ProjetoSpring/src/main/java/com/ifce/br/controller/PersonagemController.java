package com.ifce.br.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ifce.br.model.Personagem;
import com.ifce.br.service.PersonagemService;

@Controller
@RequestMapping("/personagem")
public class PersonagemController {

	@Autowired
	private PersonagemService servicePersonagem;
	
	@GetMapping("/formulario")
	public String formulario() {
		return "formulario";
	}
	@PostMapping("/salvar")
	public String salvar(Personagem personagem) {
		servicePersonagem.cadastrarPersonagem(personagem);
		return "sucesso";
	}
	@GetMapping("/listar")
	public ModelAndView listarPersonagens() {
		List<Personagem> personagens = servicePersonagem.listarPersonagens();
		ModelAndView mv = new ModelAndView("listagem-personagem");
		mv.addObject("listaPersonagens",personagens);
		return mv;
	}
	@RequestMapping("/excluir/{id}")
	public ModelAndView excluirPersonagens(@PathVariable Long id) {
		servicePersonagem.excluirPersonagem(id);
		ModelAndView mv = new ModelAndView ("redirect:/personagem/listar");
		
		return mv;
	}
}
