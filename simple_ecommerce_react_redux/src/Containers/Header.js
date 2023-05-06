import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu header">
      <div className="ui container center header-section">
        <h2>FakeShop</h2>
        <i class="shopping cart icon"></i>
        <i class="sign out alternate icon"></i>
      </div>
    </div>
  );
};

export default Header;