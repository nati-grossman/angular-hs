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
      { key: 'id', label: 'מזהה', type: 'number', sortable: true },
      { key: 'name', label: 'שם', type: 'text', sortable: true },
      { key: 'email', label: 'אימייל', type: 'text', sortable: true },
      { key: 'status', label: 'סטטוס', type: 'text', sortable: true },
      { key: 'lastLogin', label: 'כניסה אחרונה', type: 'date', sortable: true },
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
        name: 'ישראל ישראלי',
        email: 'israel@example.com',
        status: 'פעיל',
        lastLogin: '2024-03-20T10:30:00',
      },
      {
        id: 2,
        name: 'שרה כהן',
        email: 'sarah@example.com',
        status: 'לא פעיל',
        lastLogin: '2024-03-19T15:45:00',
      },
      {
        id: 3,
        name: 'דוד לוי',
        email: 'david@example.com',
        status: 'פעיל',
        lastLogin: '2024-03-20T09:15:00',
      },
      {
        id: 4,
        name: 'רחל אברהם',
        email: 'rachel@example.com',
        status: 'פעיל',
        lastLogin: '2024-03-18T14:20:00',
      },
      {
        id: 5,
        name: 'יעקב יעקובי',
        email: 'yaakov@example.com',
        status: 'לא פעיל',
        lastLogin: '2024-03-17T11:10:00',
      },
      {
        id: 6,
        name: 'מרים מרים',
        email: 'miriam@example.com',
        status: 'פעיל',
        lastLogin: '2024-03-20T08:30:00',
      },
    ];
  }
}
