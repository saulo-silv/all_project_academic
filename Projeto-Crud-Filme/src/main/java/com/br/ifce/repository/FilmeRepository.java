package com.br.ifce.repository;

import org.hibernate.Session;
import org.hibernate.Transaction;
import com.br.ifce.config.HibernateConfig;
import com.br.ifce.model.Filme;

public class FilmeRepository {
	
	public void salvar(Filme filme) {
		// esse cara aqui ele � um objeto fazer a transa��o com banco de dados
		Transaction transacao = null;
		// esse cara Retorna uma refer�ncia do objeto que cria a inst�ncia da sessao atual
		Session session = HibernateConfig.getSessionFactory().openSession();
		// aqui � onde realmente vai come�ar as transa�oes
		transacao = session.beginTransaction();
		
		session.save(filme);
		//esse cara ordena o que tem que fazer que nesse caso � salvar o objeto
		transacao.commit();
	}
	public void atualizar(Filme filme) {
		Transaction transacao = null;
		Session session = HibernateConfig.getSessionFactory().openSession();
		transacao = session.beginTransaction();
		session.saveOrUpdate(filme);
		transacao.commit();
	}
	public Filme buscarPorId(Long id ) {
		Transaction transacao = null;
		Session session = HibernateConfig.getSessionFactory().openSession();
		transacao = session.beginTransaction();
		Filme filme = session.get(Filme.class, id);
		transacao.commit();
		return filme;
		
	}
	public void remover(Filme filme) {
		Transaction transacao = null;
		Session session = HibernateConfig.getSessionFactory().openSession();
		transacao = session.beginTransaction();
		session.remove(filme);
		transacao.commit();
	
	}
	
}




