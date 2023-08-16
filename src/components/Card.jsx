import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flex flex-1 justify-stretch items-stretch flex-col  max-w-5xl min-w-sm border border-yellow-500 rounded bg-gray-100">
        <div className="h-64">
          <img
            className="rounded h-full w-full"
            src={props.imagem}
            alt="Espaguete"
          />
        </div>
        <div className="flex flex-1 flex-col min-h-sm m-4 h-full">
          <h2 className=" font-bold text-xl">{props.nome}</h2>
          <h3 className="text-sm my-0.5 text-yellow-500">{props.categoria}</h3>
          <p className="text-base">"{props.descricao}"</p>
          <div className="flex flex-1 items-end justify-end flex-col">
            <span className="flex flex-1 items-end justify-end flex-col font-bold">
              R$ {props.preco}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
