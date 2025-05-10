import { Component, OnInit } from '@angular/core';
import { TableConfig, TableColumn } from '../table/table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  tableData: any[] = [];

  // Three table configs
  paginatedConfig: TableConfig = {
    columns: [
      { key: 'id', label: 'DATA_TABLE.ID', type: 'number', sortable: true },
      { key: 'name', label: 'DATA_TABLE.NAME', type: 'text', sortable: true },
      { key: 'email', label: 'DATA_TABLE.EMAIL', type: 'text', sortable: true },
      {
        key: 'status',
        label: 'DATA_TABLE.STATUS',
        type: 'text',
        sortable: true,
      },
      {
        key: 'lastLogin',
        label: 'DATA_TABLE.LAST_LOGIN',
        type: 'date',
        sortable: true,
      },
    ],
    showHeader: true,
    striped: true,
    hover: true,
    bordered: true,
    sortable: true,
    pagination: true,
    itemsPerPage: 5,
    stickyHeader: false,
  };

  scrollConfig: TableConfig = {
    columns: [
      { key: 'id', label: 'DATA_TABLE.ID', type: 'number', sortable: true },
      { key: 'name', label: 'DATA_TABLE.NAME', type: 'text', sortable: true },
      { key: 'email', label: 'DATA_TABLE.EMAIL', type: 'text', sortable: true },
      {
        key: 'status',
        label: 'DATA_TABLE.STATUS',
        type: 'text',
        sortable: true,
      },
      {
        key: 'lastLogin',
        label: 'DATA_TABLE.LAST_LOGIN',
        type: 'date',
        sortable: true,
      },
    ],
    showHeader: true,
    striped: true,
    hover: true,
    bordered: true,
    sortable: true,
    pagination: false,
    stickyHeader: true,
  };

  simpleConfig: TableConfig = {
    columns: [
      { key: 'id', label: 'DATA_TABLE.ID', type: 'number', sortable: true },
      { key: 'name', label: 'DATA_TABLE.NAME', type: 'text', sortable: true },
      { key: 'email', label: 'DATA_TABLE.EMAIL', type: 'text', sortable: true },
      {
        key: 'status',
        label: 'DATA_TABLE.STATUS',
        type: 'text',
        sortable: true,
      },
      {
        key: 'lastLogin',
        label: 'DATA_TABLE.LAST_LOGIN',
        type: 'date',
        sortable: true,
      },
    ],
    showHeader: true,
    striped: true,
    hover: true,
    bordered: true,
    sortable: true,
    pagination: false,
    stickyHeader: false,
  };

  mode: 'paginated' | 'scroll' | 'simple' = 'paginated';

  get tableConfig(): TableConfig {
    if (this.mode === 'paginated') return this.paginatedConfig;
    if (this.mode === 'scroll') return this.scrollConfig;
    return this.simpleConfig;
  }

  ngOnInit() {
    // דאטה לדוגמה
    this.tableData = [
      {
        id: 1,
        name: 'DATA_TABLE.USER1',
        email: 'israel@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-20T10:30:00',
      },
      {
        id: 2,
        name: 'DATA_TABLE.USER2',
        email: 'sarah@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-19T15:45:00',
      },
      {
        id: 3,
        name: 'DATA_TABLE.USER3',
        email: 'david@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-20T09:15:00',
      },
      {
        id: 4,
        name: 'DATA_TABLE.USER4',
        email: 'rachel@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-18T14:20:00',
      },
      {
        id: 5,
        name: 'DATA_TABLE.USER5',
        email: 'yaakov@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-17T11:10:00',
      },
      {
        id: 6,
        name: 'DATA_TABLE.USER6',
        email: 'miriam@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-20T08:30:00',
      },
      // Add more rows up to 25
      {
        id: 7,
        name: 'DATA_TABLE.USER7',
        email: 'user7@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-16T10:00:00',
      },
      {
        id: 8,
        name: 'DATA_TABLE.USER8',
        email: 'user8@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-15T12:30:00',
      },
      {
        id: 9,
        name: 'DATA_TABLE.USER9',
        email: 'user9@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-14T09:45:00',
      },
      {
        id: 10,
        name: 'DATA_TABLE.USER10',
        email: 'user10@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-13T11:20:00',
      },
      {
        id: 11,
        name: 'DATA_TABLE.USER11',
        email: 'user11@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-12T13:10:00',
      },
      {
        id: 12,
        name: 'DATA_TABLE.USER12',
        email: 'user12@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-11T15:00:00',
      },
      {
        id: 13,
        name: 'DATA_TABLE.USER13',
        email: 'user13@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-10T10:30:00',
      },
      {
        id: 14,
        name: 'DATA_TABLE.USER14',
        email: 'user14@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-09T09:00:00',
      },
      {
        id: 15,
        name: 'DATA_TABLE.USER15',
        email: 'user15@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-08T14:45:00',
      },
      {
        id: 16,
        name: 'DATA_TABLE.USER16',
        email: 'user16@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-07T16:20:00',
      },
      {
        id: 17,
        name: 'DATA_TABLE.USER17',
        email: 'user17@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-06T12:10:00',
      },
      {
        id: 18,
        name: 'DATA_TABLE.USER18',
        email: 'user18@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-05T11:50:00',
      },
      {
        id: 19,
        name: 'DATA_TABLE.USER19',
        email: 'user19@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-04T13:30:00',
      },
      {
        id: 20,
        name: 'DATA_TABLE.USER20',
        email: 'user20@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-03T10:10:00',
      },
      {
        id: 21,
        name: 'DATA_TABLE.USER21',
        email: 'user21@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-03-02T09:40:00',
      },
      {
        id: 22,
        name: 'DATA_TABLE.USER22',
        email: 'user22@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-03-01T15:30:00',
      },
      {
        id: 23,
        name: 'DATA_TABLE.USER23',
        email: 'user23@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-02-29T14:00:00',
      },
      {
        id: 24,
        name: 'DATA_TABLE.USER24',
        email: 'user24@example.com',
        status: 'DATA_TABLE.ACTIVE',
        lastLogin: '2024-02-28T13:20:00',
      },
      {
        id: 25,
        name: 'DATA_TABLE.USER25',
        email: 'user25@example.com',
        status: 'DATA_TABLE.INACTIVE',
        lastLogin: '2024-02-27T12:10:00',
      },
    ];
  }
}
