import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Service()
export class EmployeeService {
    
    http = inject(HttpClient)    
    apiHost = environment.apiHost

    findAll() {
        const url = this.apiHost + "/employees"
        return this.http.get(url)
    }
}
