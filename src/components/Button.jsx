import React from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.selecionaCategoria(props.name)}   className="bg-gray-100 py-2 px-6 text-md rounded focus:bg-yellow-500 flex flex-1 justify-center items-center">
      <img className="p-1 m-1 h-8 w-8 inline-block" src={props.icon} />
      {props.name}
    </button>
  );
};

export default Button;
