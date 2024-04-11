import { useState } from "react";

interface Props{
  searchValue: string;
  searchOnSubmit: (e) => void;
  searchOnChange: (e) => void;
  placeHolder: string;
}

function SearchBox({ searchValue, searchOnSubmit, searchOnChange, placeHolder }: Props) {
  return(
    <>
      {/* <div className='top-search no-select nowrap'>
        <form onSubmit={searchOnSubmit}>
          <input
            type='text'
            id='search'
            name='search'
            autoComplete='off'
            placeholder={placeHolder}
            onChange={searchOnChange}
            value={searchValue}
          />
          <button type='submit' className='pointer' onClick={searchOnSubmit}>
            <i className='material-icons'>search</i>
          </button>
        </form>
      </div> */}
      <div className='box-content box-vertical-padding box-horizontal-padding'>
        <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
          <div className='top-search no-select'>
            <form onSubmit={searchOnSubmit}>
              <input
                type='text'
                id='search'
                name='search'
                autoComplete='off'
                placeholder={placeHolder}
                onChange={searchOnChange}
                value={searchValue}
              />
              <button type='submit' className='pointer' onClick={searchOnSubmit}>
                <i className='material-icons'>search</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
