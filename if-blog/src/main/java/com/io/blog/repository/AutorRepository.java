package com.io.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.io.blog.model.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {

}
