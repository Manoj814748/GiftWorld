import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the menu icon from FontAwesome

const MenuIcon = () => {
  // State to manage the visibility of categories
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);

  // Toggle visibility state
  const toggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  return (
    <div>
      {/* Menu Icon with click event */}
      <div style={{ fontSize: '24px', cursor: 'pointer' }} onClick={toggleCategories}>
        <FaBars />
      </div>

      {/* Categories List, conditionally rendered based on state */}
      {isCategoriesVisible && (
        <ul style={{ display: 'relative', listStyleType: 'none', padding: 0, marginTop: '10px' }}>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      )}
    </div>
  );
};

export default MenuIcon;
