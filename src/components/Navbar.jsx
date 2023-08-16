import React from "react";
import Button from "./Button";

const Navbar = ({ selecionaCategoria }) => {
  return (
    <div className="flex flex-wrap justify-between flex-1 max-w-5xl gap-2 mx-auto my-2">
      <Button
        name="Entradas"
        icon="src/assets/entrada.png"
        selecionaCategoria={selecionaCategoria}
      />
      <Button
        name="Massas"
        icon="src/assets/massa.png"
        selecionaCategoria={selecionaCategoria}
      />
      <Button
        name="Carnes"
        icon="src/assets/carne.png"
        selecionaCategoria={selecionaCategoria}
      />
      <Button
        name="Bebidas"
        icon="src/assets/bebidas.png"
        selecionaCategoria={selecionaCategoria}
      />
      <Button
        name="Saladas"
        icon="src/assets/salada.png"
        selecionaCategoria={selecionaCategoria}
      />
      <Button
        name="Sobremesas"
        icon="src/assets/sobremesa.png"
        selecionaCategoria={selecionaCategoria}
      />
    </div>
  );
};

export default Navbar;
