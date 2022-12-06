// import React from 'react';
import css from 'components/Filter/filtr.module.css';

const Filter = ({ onChange, value }) => {
    return (
        <label>
            <span className={css.findSpam}>Find contacts by name</span>
        <input className={css.findInput} type="text" value={value} onInput={onChange} />
      </label>
    );
};

export default Filter;
