import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const Search = ({ search, onSearchChange, loadOptions }) => {

  return (
    <>
      <AsyncPaginate
        placeholder="City Name"
        debounceTimeout={600}
        value={search}
        onChange={ onSearchChange }
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
