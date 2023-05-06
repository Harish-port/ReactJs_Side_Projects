import React from "react";

const Header = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  }
  return (
    <div className="ui fixed menu header">
      <div className="ui container center header-section">
        <h2>FakeShop</h2>
        <i class="shopping cart icon"></i>
        <i class="sign out alternate icon" onClick={clearLocalStorage}></i>
      </div>
    </div>
  );
};

export default Header;