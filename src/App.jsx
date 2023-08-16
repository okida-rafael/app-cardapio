import { produtos } from "../data/data-produtos";

import Banner from "./components/Banner";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

import { useState } from "react";

function App() {
  const [produtosSelecionados, setProdutosSelecionados] = useState(produtos);

  const buscarProduto = (produtoBuscado) => {
    produtoBuscado.length >= 3
      ? setProdutosSelecionados(
          produtos.filter(
            (produto) =>
              produto.nome
                .toLowerCase()
                .includes(produtoBuscado.toLowerCase()) ||
              produto.categoria
                .toLocaleLowerCase()
                .includes(produtoBuscado.toLocaleLowerCase())
          )
        )
      : setProdutosSelecionados(produtos);
  };

  const selecionaCategoria = (categoria) => {
    setProdutosSelecionados(
      produtos.filter((produto) =>
        produto.categoria.toLowerCase().includes(categoria.toLowerCase())
      )
    );
  };

  return (
    <div id="app" className="px-5 pb-3 font-poppins">
      <Banner />
      <Navbar selecionaCategoria={selecionaCategoria} />
      <Search buscarProduto={buscarProduto} />
      <h2 className="text-3xl text-yellow-500 m-auto text-center font-dancing font-semibold">
        Cardápio
      </h2>
      <div className="flex gap-10 items-stretch justify-center max-w-5xl flex-wrap mx-auto mb-12 mt-1 bg-gray-50 p-3 rounded-md">
        {produtosSelecionados &&
          produtosSelecionados.map((produto, index) => (
            <Card
              key={index}
              nome={produto.nome}
              categoria={produto.categoria}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
