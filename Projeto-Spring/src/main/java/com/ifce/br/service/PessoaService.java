package com.ifce.br.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifce.br.model.Pessoa;
import com.ifce.br.repository.PessoaRepository;

@Service
public class PessoaService {
	@Autowired
	private PessoaRepository repositoryPessoa;
	public void cadastrarPessoa(Pessoa pessoa) {
		repositoryPessoa.save(pessoa);
	}
	public List<Pessoa> listarPessoas(){
		return repositoryPessoa.findAll();
		
	
	
	}
	
	
}
