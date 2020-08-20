import React from 'react'

import { useSelect } from 'downshift'
import { navigate } from 'gatsby'

const items = [
    'NXTLVL FACILITY',
    'NXTLVL SERVICES',
    'NXTLVL CLASSES',
  ]

const onChange = (e) => navigate(e.target.value);

function DropdownSelect() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({items})

    return (
      <div>
        <button defaultValue="NXTLVL" onChange={onChange} {...getToggleButtonProps()}>{selectedItem || 'NXTLVL'} </button>
        <ul {...getMenuProps()}>
            {isOpen &&
                items.map((item, index) => (
                    <li
                        style={
                            highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                        }
                        key={`${item}${index}`}
                        {...getItemProps({item, index})}              
                        >
                    {item}
                    </li>
            ))}
        </ul>
        <div tabIndex="0" />
      </div>
    )
  }

  export default DropdownSelect