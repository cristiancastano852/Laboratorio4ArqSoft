import axios from 'axios';

export class EmployeeService {
    baseUrl = "http://localhost:8080/api/v1/";

    getAll(){
        return axios.get(this.baseUrl + "all").then(res => res.data);
    }

    save(employee) {
        return axios.post(this.baseUrl + "save", employee).then(res => res.data);
    }

    delete(id) {
        return axios.get(this.baseUrl + "delete/"+id).then(res => res.data);
    }

}