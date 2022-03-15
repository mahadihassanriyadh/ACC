// rafce (shortcut)

import React from 'react'
import List from './List'

const Lists = () => {
    const items: string[] = ["Riyadh", "Robin", "Ronan", "Rony", "Rakib", "Rimon"];
    const onClick = (item: string): void => alert(item);

  return (
    <div>
      <List items={items} onClick={onClick} />
    </div>
  )
}

export default Lists