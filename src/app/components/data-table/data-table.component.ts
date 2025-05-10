import { Component, OnInit } from '@angular/core';
import { TableConfig, TableColumn } from '../table/table.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  tableData: any[] = [];
  tableConfig: TableConfig = {
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
  };

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
    ];
  }
}
