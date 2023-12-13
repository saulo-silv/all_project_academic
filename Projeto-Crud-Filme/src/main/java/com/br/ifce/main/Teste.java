package com.br.ifce.main;

import com.br.ifce.model.Filme;
import com.br.ifce.repository.FilmeRepository;

public class Teste {
	public static void main(String[]args) {
	Filme f1 = new Filme();
	f1.setTitulo("DevDead");
	f1.setDataLancamento("11/05/3000");
	f1.setPreco(999.99);
	f1.setDuracaoMinutos(9.59);
	f1.setId(1);
	
	Filme f2 = new Filme();
	f2.setTitulo("putscript");
	f2.setDataLancamento("31/12/4000");
	f2.setPreco(00.99);
	f2.setDuracaoMinutos(19.59);
	f2.setId(2);
	
	Filme f3 = new Filme();
	f3.setTitulo("chamusca o filme");
	f3.setDataLancamento("18/05/2022");
	f3.setPreco(00);
	f3.setDuracaoMinutos(1.00);
	f3.setId(3);
	
	FilmeRepository repositoryFilme = new FilmeRepository();
	repositoryFilme.salvar(f1);
	repositoryFilme.salvar(f2);
	repositoryFilme.salvar(f3);
	
	f2.setTitulo("a volta dos que nao foram");
	f2.setDataLancamento("31/12/1000");
	f2.setPreco(1.99);
	f2.setDuracaoMinutos(0.59);
	repositoryFilme.atualizar(f2);
	
	Filme filme = repositoryFilme.buscarPorId(2L);
	System.out.println(filme.getTitulo());
	
	repositoryFilme.remover(f2);	
	}
}
