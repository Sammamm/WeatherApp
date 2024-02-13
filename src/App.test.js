import {
  fireEvent,
  getByPlaceholderText,
  getByTestId,
  render,
  screen,
} from '@testing-library/react';
import App, { loadOptions } from './App';
import { describe, expect, test, vi } from 'vitest';
import Search from './components/search/search';

const mockOnSearchChange = vi.fn(() => {
  console.log('Search value:', 'asdasdasd');
});

const mockLoadOptions = vi.fn((inputValue) => {
  return {
    options: [
      { value: '1', label: 'City 1' },
      { value: '2', label: 'City 2' },
    ],
  };
});

describe('App file (App.jsx) testing', () => {
  const seachData = {};
  it(
    ("Testing 'loadOptions' to be defined",
    () => {
      render(<App />);
      expect(loadOptions).toBeDefined();
    }),
  );

  it(
    ("Testing 'OnSearch' to be defined",
    () => {
      render(<App />);
      expect(onSearchChange).toBeDefined();
    }),
  );
});

describe('Searchbar (Searh.jsx) testing', () => {
  it('Searching test', () => {
    render(
      <Search
        search={null}
        onSearchChange={mockOnSearchChange}
        loadOptions={mockLoadOptions}
      />,
    );

    const searchbar = screen.getByTestId('searchbar'); // Using screen.getByTestId instead of getByTestId
    expect(searchbar).toBeInTheDocument();
  });

  // it('Test the Async Paginate', () => {
  //   const asyncPaginate = screen.getByTestId('async-paginate');
  //   fireEvent.change(asyncPaginate, { target: { value: 'New York' } });
  //   expect(mockOnSearchChange).toHaveBeenCalledWith('New York');
  // });
});
