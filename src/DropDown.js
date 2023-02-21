import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';

export const colourOptions = [
  { value: '1', label: 'Nikola Jokic', color: '#00B8D9' },
  { value: '2', label: 'James Harden', color: '#0052CC'},
  { value: '3', label: 'Stephen Curry', color: '#5243AA' },
  { value: '4', label: 'Damian Lillard', color: '#FF5630'},
  { value: '5', label: 'Kawhi Leonard', color: '#FF8B00' },
  { value: '6', label: 'Luka Doncic', color: '#FFC400' },
  { value: '7', label: 'Giannis Antetokounmpo', color: '#36B37E' },
  { value: '8', label: 'Anthony Davis', color: '#00875A' }
];

export default class CreatableMulti extends Component<*, State> {
  handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    return (
      <CreatableSelect
        isMulti
        placeholder="Close Contacts"
        classNamePrefix="dropDownHolder"
        onChange={this.handleChange}
        options={colourOptions}
      />
    );
  }
}
