
package com.udea.empleado.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@ApiModel(description="Entidad de Datos del Empleado")
@Entity
public class Empleado implements Serializable{
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @ApiModelProperty(notes="Id automatico generado en la BD")
    @Column(name="idemployee")
    private Long idEmployee;
    
    @ApiModelProperty(notes="Atributo Nombre del Empleado")
    @Column(name="firstname", nullable=false,length=80)
    private @NonNull String firstName;

    @ApiModelProperty(notes="Atributo Apellido del Empleado")
    @Column(name="lastname", nullable=false,length=80)
     private @NonNull String lastName;
    
    @ApiModelProperty(notes="Atributo email del Empleado")
    @Column(name="email", nullable=false,length=80)
    private @NonNull String email;
    
    @ApiModelProperty(notes="Atributo año de ingreso del Empleado")
    @Column(name="fecha", nullable=false,length=80)
    private @NonNull Date fecha;
    
    @ApiModelProperty(notes="Atributo del salario")
    @Column(name="salario", nullable=false,length=80)
    private @NonNull Integer salario;
    
    @ApiModelProperty(notes="Atributo del cargo del Empleado")
    @Column(name="cargo", nullable=false,length=80)
    private @NonNull String cargo;
    
    @ApiModelProperty(notes="Atributo de la direccion del Empleado")
    @Column(name="direccion", nullable=false,length=80)
    private @NonNull String direccion;
    
    @ApiModelProperty(notes="Atributo de la oficina del Empleado")
    @Column(name="oficina", nullable=false,length=80)
    private @NonNull String oficina;
   
    @ApiModelProperty(notes="Atributo de la dependencia del Empleado")
    @Column(name="dependencia", nullable=false,length=80)
    private @NonNull String dependencia;
    
    
    
}
