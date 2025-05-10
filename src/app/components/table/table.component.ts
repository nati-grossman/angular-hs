import { Component, Input } from '@angular/core';

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
}

@Component({
  selector: 'app-table',
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
  };

  currentPage = 1;
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  get paginatedData(): any[] {
    if (!this.config.pagination) {
      return this.sortedData;
    }

    const start = (this.currentPage - 1) * (this.config.itemsPerPage || 10);
    const end = start + (this.config.itemsPerPage || 10);
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
    if (!this.config.pagination) return 1;
    return Math.ceil(this.data.length / (this.config.itemsPerPage || 10));
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
