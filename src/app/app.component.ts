import { Component } from '@angular/core';
import data from '../assets/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  submittedFormData: any;
  title = 'Juugad1';
  schema = data;
  layout = ['*'];
  jsonFormOptions = {
    loadExternalAssets: true,
  };

  onSubmit(data: any) {
    this.submittedFormData = data;
  }
  // schema = {
  //   type: 'object',
  //   properties: {
  //     first_name: { type: 'string' },
  //     last_name: { type: 'string' },
  //     address: {
  //       type: 'object',
  //       properties: {
  //         street_1: { type: 'string' },
  //         street_2: { type: 'string' },
  //         city: { type: 'string' },
  //         state: {
  //           type: 'string',
  //           enum: ['AL', 'AK', 'AS', 'AZ'],
  //         },
  //         zip_code: { type: 'string' },
  //       },
  //     },
  //     birthday: { type: 'string' },
  //     notes: { type: 'string' },
  //     phone_numbers: {
  //       type: 'array',
  //       items: {
  //         type: 'object',
  //         properties: {
  //           type: { type: 'string', enum: ['cell', 'home', 'work'] },
  //           number: { type: 'string' },
  //         },
  //         required: ['type', 'number'],
  //       },
  //     },
  //   },
  //   required: ['last_name'],
  // };
}
