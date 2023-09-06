"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    // Não permite que o cálculo incie com 0 e se iniciar necessite de uma vírgula
    if (input === "0" && number !== ",") {
      setInput(number);
    } else {
      setInput((prevInput) => prevInput + number);
    }
  };

  const handleOperatorClick = (operator) => {
    if (input === "") {
      // Não permite inserir operador se a entrada estiver vazia
      return;
    }
    setInput((prevInput) => prevInput + operator);
  };

  const handlePercentageClick = () => {
    if (input === "") {
      return;
    }
    // Divide o valor atual por 100 para calcular a porcentagem
    const calculatedPercentage = parseFloat(input.replace(/,/g, ".")) / 100;
    setInput(calculatedPercentage.toString().replace(/\./g, ",")); // Exibe o resultado da porcentagem no input
  };

  const clearInput = () => {
    // Limpar o input
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(
        input.replace(/÷/g, "/").replace(/×/g, "*").replace(/,/, "."), // Para que no input apareça os operadores da forma de leitura e não programação
      );
      setResult(calculatedResult.toString().replace(/\./g, ","));
    } catch (error) {
      // Caso de erro
      setResult("Erro");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col rounded-[40px] items-center justify-center w-[350px] h-[600px] bg-black shadow-2xl">
        <div className="flex text-4xl w-[85%] h-[15%] flex-row text-white justify-end items-end mb-[15px]">
          {result || input}
        </div>
        <div className="w-[85%] flex flex-col gap-5 text-white">
          <ul className="flex w-full h-full flex-row gap-[8px] text-lg">
            <li
              className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full"
              onClick={() => clearInput()}
            >
              AC
            </li>
            <li className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full">
              +/-
            </li>
            <li
              className="cursor-pointer hover:bg-gray p-[20px] text-black font-bold flex items-center justify-center w-[25%]  bg-gray_light rounded-full"
              onClick={() => handlePercentageClick("")}
            >
              %
            </li>
            <li
              className="cursor-pointer p-[20px] hover:bg-orange_light text-white font-bold flex items-center justify-center w-[25%] bg-orange rounded-full"
              onClick={() => handleOperatorClick("÷")}
            >
              &divide;
            </li>
          </ul>

          <ul className="flex w-full flex-row gap-[8px] text-lg">
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("7")}
            >
              7
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("8")}
            >
              8
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("9")}
            >
              9
            </li>
            <li
              className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%] bg-orange rounded-full p-[20px] cursor-pointer"
              onClick={() => handleOperatorClick("×")}
            >
              ✖
            </li>
          </ul>

          <ul className="flex w-full flex-row gap-[8px] text-lg">
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("4")}
            >
              4
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("5")}
            >
              5
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("6")}
            >
              6
            </li>
            <li
              className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%]  bg-orange rounded-full p-[20px] cursor-pointer"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </li>
          </ul>

          <ul className="flex w-full flex-row gap-[8px] text-lg">
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("1")}
            >
              1
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("2")}
            >
              2
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%]  bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("3")}
            >
              3
            </li>
            <li
              className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%]  bg-orange rounded-full p-[20px] cursor-pointer"
              onClick={() => handleOperatorClick("+")}
            >
              +
            </li>
          </ul>

          <ul className="flex w-full flex-row gap-[8px] text-lg">
            <li
              className="text-white font-bold hover:bg-gray flex items-center  w-[50%] bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick("0")}
            >
              0
            </li>
            <li
              className="text-white font-bold hover:bg-gray flex items-center justify-center w-[25%] bg-gray_Dark rounded-full p-[20px] cursor-pointer"
              onClick={() => handleNumberClick(",")}
            >
              ,
            </li>
            <li
              className="text-white font-bold hover:bg-orange_light flex items-center justify-center w-[25%] bg-orange rounded-full p-[20px] cursor-pointer"
              onClick={() => calculateResult()}
            >
              =
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
