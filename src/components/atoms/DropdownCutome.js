import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Sort from "../icons/Sort";


const DropdownCutome = React.forwardRef(({onClick }, ref) => (
  <span
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
   <Sort/>
  </span>
));


const DropdownCustome = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle  as={DropdownCutome} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu onClick={(e) =>props.sortTodos(e.target.text)} className="mt-5" style={{ width: 230 }}>
        <Dropdown.Item eventKey="1">
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='2em'
          style={{ color: '#16ABF8',marginRight: 12 }}
          width='1.3em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11 9H20V11H11zM11 13H18V15H11zM11 5H22V7H11zM11 17H16V19H11zM5 20L7 20 7 8 10 8 6 4 2 8 5 8z'></path>
        </svg>
        Terbaru
        </Dropdown.Item>
        <hr/>
        <Dropdown.Item eventKey="2">
        <svg
          stroke='currentColor'
          style={{ color: '#16ABF8',marginRight: 12 }}
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='2em'
          width='1.3em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 20L10 16 7 16 7 4 5 4 5 16 2 16zM11 8H20V10H11zM11 12H18V14H11zM11 4H22V6H11zM11 16H16V18H11z'></path>
        </svg>
            Terlama
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
        <svg
          style={{ color: '#16ABF8',marginRight: 12 }}
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='2em'
          width='1.3em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM7 3.99L5 3.99 5 15.99 2 15.99 6 19.99 10 15.99 7 15.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z'></path>
        </svg>
          A-Z
        </Dropdown.Item>
        <hr/>
        <Dropdown.Item eventKey="4">
        <svg
        style={{ color: '#16ABF8',marginRight: 12 }}
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='2em'
          width='1.3em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM6 3.99L2 7.99 5 7.99 5 19.99 7 19.99 7 7.99 10 7.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z'></path>
        </svg>
            Z-A</Dropdown.Item>
        <hr/>
        <Dropdown.Item eventKey="5">
        <svg
         style={{ color: '#16ABF8',marginRight: 12 }}
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='2em'
          width='1.3em'
          data-cy='sort-selection-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z'></path>
        </svg>
            Belum Selesai</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default DropdownCustome;
