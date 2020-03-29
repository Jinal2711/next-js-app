import React from "react";
import UserInput from "../Hooks/userInput";
const UserForm = () => {
  const [firtsName, bindFirstName, resetFirstName] = UserInput("");
  const [lastName, bindLastName, resetLastName] = UserInput("");

  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${firtsName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name:</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default UserForm;
