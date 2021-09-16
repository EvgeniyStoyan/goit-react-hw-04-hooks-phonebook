import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div>
    <label className={s.label_filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input_filter}
      />
    </label>
  </div>
);

export default Filter;
