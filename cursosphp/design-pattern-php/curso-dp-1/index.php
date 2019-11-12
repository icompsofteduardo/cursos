<?php

require "Utils/Orcamento.php";
require "Desconto/Desconto.php";
require "Desconto/Desconto5Itens.php";
require "Desconto/Desconto500Reais.php";
require "Desconto/SemDesconto.php";
require "Utils/Item.php";
require "Imposto/CalculadoraDeImpostos.php";
require "Desconto/CalculadoraDeDescontos.php";
require "Imposto/Imposto.php";
require "Imposto/ICMS.php";
require "Imposto/ISS.php";
require "Imposto/KCV.php";
require "Imposto/ICCC.php";

$reforma = new Orcamento(1200);

// Impostos

$calculadora = new CalculadoraDeImpostos();

echo "Impostos";
echo "<br/>";
echo $calculadora->calcula($reforma, new ICMS());
echo "<br/>";
echo $calculadora->calcula($reforma, new ISS());
echo "<br/>";
echo $calculadora->calcula($reforma, new KCV());
echo "<br/>";
echo $calculadora->calcula($reforma, new ICCC());
echo "<br/>";
echo "<br/>";
echo "--------";
echo "<br/>";
echo "<br/>";

// Descontos

echo "Descontos";
echo "<br/>";

$calculadoraDescontos = new CalculadoraDeDescontos();

$reforma->addItem(new Item("Tijolo", 250));
$reforma->addItem(new Item("Cimento 1KG", 250));
$reforma->addItem(new Item("Cimento 1KG", 250));
$reforma->addItem(new Item("Cimento 1KG", 250));

echo $calculadoraDescontos->desconto($reforma);
?>
