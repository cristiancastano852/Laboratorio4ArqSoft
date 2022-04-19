
import React, { Component } from 'react';
import './App.css';
import { EmployeeService } from './service/EmployeeService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';


import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      visible : false,
      employee: {
        id: null,
        nombre: null,
        email: null,
        fechaIngreso: null,
        salario: null,
        cargo: null,
        direccion: null,
        oficina: null,
        dependencia: null,
      },
      selectedEmployee : {

      }
    };
    this.items = [
      {
        label : 'Nuevo',
        icon  : 'pi pi-fw pi-plus',
        command : () => {this.showSaveDialog()}
      },
      {
        label : 'Editar',
        icon  : 'pi pi-fw pi-pencil',
        command : () => {this.showEditDialog()}
      },
      {
        label : 'Eliminar',
        icon  : 'pi pi-fw pi-trash',
        command : () => {this.delete()}
      }
    ];
    this.employeeService = new EmployeeService();
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
  }

  componentDidMount(){
    this.employeeService.getAll().then(data => this.setState({employees: data}))
  }

  save() {
    this.employeeService.save(this.state.employee).then(data => {
      this.setState({
        visible : false,
        employee: {
          id: null,
          nombre: null,
          apellido: null,
          email: null,
          fechaIngreso: null,
          salario: null,
          cargo: null,
          direccion: null,
          oficina: null,
          dependencia: null,
        },
      });
      this.employeeService.getAll().then(data => this.setState({employees: data}))
    })
  }

  delete() {
    if(window.confirm("¿Realmente desea eliminar el registro?")) {
      this.employeeService.delete(this.state.selectedEmployee.id).then(data => {
        this.employeeService.getAll().then(data => this.setState({employees: data}));
      });
    }
  }

  render(){
    return (
      <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
        <Menubar model={this.items}/>
        <br/>
        <Panel header="Datos de empleados">
            <br/>
            <DataTable value={this.state.employees} paginator={true} rows="4" selectionMode="single" selection={this.state.selectedEmployee} onSelectionChange={e => this.setState({selectedEmployee: e.value})}>
              <Column field="id" header="ID"></Column>
              <Column field="nombre" header="Nombre"></Column>
              <Column field="apellido" header="Apellido"></Column>
              <Column field="email" header="Email"></Column>
              <Column field="fechaIngreso" header="Fecha de Ingreso"></Column>
              <Column field="salario" header="Salario"></Column>
              <Column field="cargo" header="Cargo"></Column>
              <Column field="direccion" header="Direccion"></Column>
              <Column field="oficina" header="Oficina"></Column>
              <Column field="dependencia" header="Dependencia"></Column>
            </DataTable>
        </Panel>
        <Dialog header="Crear empleado" visible={this.state.visible} style={{width: '400px'}} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
            <form id="employee-form">

              <span className="p-float-label">
                <InputText value={this.state.employee.nombre} style={{width : '100%'}} id="nombre" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.nombre = val;

                        return { employee };
                    })}
                  } />
                <label htmlFor="nombre">Nombre</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.employee.apellido} style={{width : '100%'}} id="apellido" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.apellido = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="apellido">Apellido</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.employee.email} style={{width : '100%'}} id="email" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.email = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="email">Email</label>
              </span>
              <br />
              <span className="p-float-label">
                <InputText value={this.state.employee.fechaIngreso} style={{width : '100%'}} id="fechaIngreso" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.fechaIngreso = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="fechaIngreso">Fecha Ingreso</label>
              </span>
              <br />
              <span className="p-float-label">
                <InputText value={this.state.employee.salario} style={{width : '100%'}} id="salario" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.salario = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="salario">Salario</label>
              </span>
              <br />
              <span className="p-float-label">
                <InputText value={this.state.employee.cargo} style={{width : '100%'}} id="cargo" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.cargo = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="cargo">Cargo</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.employee.direccion} style={{width : '100%'}} id="direccion" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.direccion = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="direccion">Dirección</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.employee.oficina} style={{width : '100%'}} id="oficina" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.oficina = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="oficina">Oficina</label>
              </span>
              <br/>
              <span className="p-float-label">
                <InputText value={this.state.employee.dependencia} style={{width : '100%'}} id="dependencia" onChange={(e) => {
                    let val = e.target.value;
                    this.setState(prevState => {
                        let employee = Object.assign({}, prevState.employee);
                        employee.dependencia = val

                        return { employee };
                    })}
                  } />
                <label htmlFor="dependencia">Dependencia</label>
              </span>
              <br/>
            </form>
        </Dialog>
      </div>
    );
  }

  showSaveDialog(){
    this.setState({
      visible : true,
      employee: {
        id: null,
        nombre: null,
        apellido: null,
        email: null,
        fechaIngreso: null,
        salario: null,
        cargo: null,
        direccion: null,
        oficina: null,
        dependencia: null,
      }
    });
    document.getElementById('employee-form').reset();
  }

  showEditDialog() {
    this.setState({
      visible : true,
      employee : {
        id: this.state.selectedEmployee.id,
        nombre: this.state.selectedEmployee.nombre,
        apellido: this.state.selectedEmployee.apellido,
        email: this.state.selectedEmployee.email,
        fechaIngreso: this.state.selectedEmployee.fechaIngreso,
        salario: this.state.selectedEmployee.salario,
        cargo: this.state.selectedEmployee.cargo,
        direccion: this.state.selectedEmployee.direccion,
        oficina: this.state.selectedEmployee.oficina,
        dependencia: this.state.selectedEmployee.dependencia,
      }
    })
  }
}