package com.ifce.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ifce.br.model.Personagem;
@Repository
public interface PersonagemRepository extends JpaRepository<Personagem, Long>{

}
