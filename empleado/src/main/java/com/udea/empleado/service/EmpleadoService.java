/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.empleado.service;

import com.udea.empleado.dao.IEmpleadoDAO;
import com.udea.empleado.model.Empleado;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Lenovo
 */
@Service
public class EmpleadoService {
    @Autowired
    private IEmpleadoDAO dao;
    
    public Empleado save(Empleado t) {
       return dao.save(t);
    }
    
    public Empleado update(Empleado t){
       return dao.save(t);
    }
    
    public void delete(Empleado t){
      dao.delete(t);
    }
    
    public Iterable<Empleado> list(){
      return dao.findAll();
    }
    
    public Optional<Empleado> listId(long id){
       return dao.findById(id);
    
    }
    
    
}
