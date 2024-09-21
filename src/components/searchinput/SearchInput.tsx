import React from 'react';
import '../searchinput/SearchInput.css';
import SearchIcon from '../../assets/images/searchIcon.svg';

interface SearchInputProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onChange }) => {
  return (
    <div className="search-input">
      <input
        type="text"

        placeholder="Search"
        value={searchTerm}
        onChange={onChange}
      />
      <button className='inputCat'><span>All Categories</span></button>
      <button className='searchIcon'><img src={SearchIcon} alt="Search" /></button>
    </div>
  );
};

export default SearchInput;
