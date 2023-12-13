package com.br.ifce.edu.controller;

import com.br.ifce.model.Filme;
import com.br.ifce.service.FilmeService;

// esse cara aqui ele vai verificar qual é o tipo de dados
//depois disso ele vai chmar o servico para enviar esses dados atraves de equisicao

public class FilmeController {
	
	private FilmeService serviceFilme = new FilmeService();

	public void salvarFilme(Filme filme) {
		serviceFilme.salvarService(filme);
		
	}
	
	public void atualizarFilme(Filme filme) {
		serviceFilme.atualizarService(filme);
		
	}
	
	public Filme buscarPorId(Long id) {
		return serviceFilme.buscarPorIdService(id);
		
	}
	
	public void removerFilme(Filme filme) {
		serviceFilme.removerService(filme);
	
	}
	

}



