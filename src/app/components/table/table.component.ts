import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationComponent } from '../pagination/pagination.component';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'boolean' | 'custom';
  sortable?: boolean;
  width?: string;
}

export interface TableConfig {
  columns: TableColumn[];
  showHeader?: boolean;
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  itemsPerPage?: number;
  stickyHeader?: boolean;
  small: boolean;
  paginationConfig: {
    enabled: boolean;
    itemsPerPage: number;
    maxSize: number;
  };
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TranslateModule, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() config: TableConfig = {
    columns: [],
    showHeader: true,
    striped: true,
    hover: true,
    bordered: true,
    sortable: true,
    pagination: true,
    itemsPerPage: 10,
    stickyHeader: false,
    small: false,
    paginationConfig: {
      enabled: false,
      itemsPerPage: 10,
      maxSize: 5,
    },
  };

  currentPage = 1;
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  get paginatedData(): any[] {
    if (!this.config.paginationConfig.enabled) {
      return this.sortedData;
    }

    const start =
      (this.currentPage - 1) * this.config.paginationConfig.itemsPerPage;
    const end = start + this.config.paginationConfig.itemsPerPage;
    return this.sortedData.slice(start, end);
  }

  get sortedData(): any[] {
    if (!this.sortColumn) {
      return this.data;
    }

    return [...this.data].sort((a, b) => {
      const aValue = a[this.sortColumn!];
      const bValue = b[this.sortColumn!];

      if (aValue === bValue) return 0;
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      const comparison = aValue < bValue ? -1 : 1;
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  get totalPages(): number {
    if (!this.config.paginationConfig.enabled) return 1;
    return Math.ceil(
      this.data.length / this.config.paginationConfig.itemsPerPage
    );
  }

  onSort(column: TableColumn): void {
    if (!this.config.sortable || !column.sortable) return;

    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
