import React from "react";

const Search = ({ buscarProduto }) => {
  return (
    <div className="flex items-start mx-auto my-8 border rounded-3xl max-w-5xl">
      <img className="w-6 h-6 p-1 m-1" src="src/assets/lupa.png" alt="lupa" />
      <input
        onChange={(event) => buscarProduto(event.target.value)}
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        className="w-full m-auto focus:outline-none"
      />
    </div>
  );
};

export default Search;
