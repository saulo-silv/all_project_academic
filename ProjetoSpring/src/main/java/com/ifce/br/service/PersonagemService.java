package com.ifce.br.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ifce.br.model.Personagem;
import com.ifce.br.repository.PersonagemRepository;
@Service
public class PersonagemService {

	
	@Autowired
	private PersonagemRepository repositoryPersonagem;
	public void cadastrarPersonagem(Personagem personagem) {
		repositoryPersonagem.save(personagem);
	}

	public List<Personagem> listarPersonagens() {
		return repositoryPersonagem.findAll();
	}

	public void excluirPersonagem(Long id) {
		repositoryPersonagem.deleteById(id);
	}

}
