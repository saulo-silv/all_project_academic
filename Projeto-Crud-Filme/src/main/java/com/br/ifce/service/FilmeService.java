package com.br.ifce.service;

import com.br.ifce.model.Filme;
import com.br.ifce.repository.FilmeRepository;


// esse cara aqui vai ser o responsavel pela regra de negocio 
// onde ele vai chamar o repositoria para criar a regra de negocio
public class FilmeService {
	
	private FilmeRepository repositoryFilme = new FilmeRepository();
		
	
	public void salvarService(Filme filme) {
		repositoryFilme.salvar(filme);
		
	}

	public void atualizarService(Filme filme) {
		repositoryFilme.atualizar(filme);
		
	}

	public Filme buscarPorIdService(Long id) {
		return repositoryFilme.buscarPorId(id);
	}


	public void removerService(Filme filme) {
		repositoryFilme.remover(filme);
		
	}

	

	
	
}
