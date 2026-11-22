import { Component, computed, inject, signal } from '@angular/core';
import { EmployeeService } from '../shared/employee-service';

@Component({
  imports: [],
  selector: 'app-employee-component',
  styleUrl: './employee-component.css',
  templateUrl: './employee-component.html',
})
export class EmployeeComponent {
  employeeService = inject(EmployeeService)

  employees = signal<any[]>([])
  currentPage = signal(1)
  pageSize = 5

  ngOnInit() {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeService.findAll().subscribe({
      next: (res: any) => {
        console.log(res)
        this.employees.set(res.data);
      },
      error: () => {},
    })
  }

  getTotalPages(): number {
    return Math.ceil(this.employees().length / this.pageSize)
  }

  pagedEmployees = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize
    return this.employees().slice(startIndex, startIndex + this.pageSize)
  })

  previousPage() {
    this.currentPage.update(a => Math.max(1, a - 1))
  }

  nextPage() {
    this.currentPage.update(a => Math.min(this.getTotalPages(), a + 1))
  }
}
