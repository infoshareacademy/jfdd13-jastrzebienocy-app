import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import styles from './SideBar.module.css';



// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

// class dropdown extends React.Component {
//     render() {
//             return (
//   <Dropdown  className={styles.dropdown} text='Kategoria'>
//     <Dropdown.Menu>
//       <Dropdown.Item className={styles.dropdownItem} text='Kuchnia włoska' />
//       <Dropdown.Item className={styles.dropdownItem} text='Kuchnia azjatycka' />
//       <Dropdown.Item className={styles.dropdownItem} text='Kuchnia polska' />
//     </Dropdown.Menu>
//   </Dropdown>
// )
// }
// }

const dropdownI = [
  {
    key: 'Kuchnia włoska',
    text: 'Kuchnia włoska',
    value: 'Kuchnia włoska',
  },
  {
    key: 'Kuchnia azjatycka',
    text: 'Kuchnia azjatycka',
    value: 'Kuchnia azjatycka',
  },
  {
    key: 'Kuchnia polska',
    text: 'Kuchnia polska',
    value: 'Kuchnia polska',
  },
]

const dropdown = () => (
  <Dropdown
    placeholder='Kategoria'
    fluid
    selection
    options={dropdownI}
  />
)

export default dropdown;



