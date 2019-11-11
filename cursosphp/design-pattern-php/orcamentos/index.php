<?php

require "Utils/Orcamento.php";
require "Desconto/Desconto.php";
require "Desconto/Desconto5Itens.php";
require "Desconto/Desconto500Reais.php";
require "Desconto/SemDesconto.php";
require "Utils/Item.php";
require "Imposto/CalculadoraImpostos.php";
require "Desconto/CalculadoraDescontos.php";
require "Imposto/Imposto.php";
require "Imposto/ICMS.php";
require "Imposto/ISS.php";
require "Imposto/KCV.php";

$reforma = new Orcamento(501);

// Impostos

$calculadora = new CalculadoraImpostos();

echo $calculadora->calcula($reforma, new ICMS());
echo "<br/>";
echo $calculadora->calcula($reforma, new ISS());
echo "<br/>";
echo $calculadora->calcula($reforma, new KCV());
echo "<br/>";
echo "<br/>";

// Descontos
echo "Teste de descontos";
$calculadoraDeDescontos = new CalculadoraDescontos();

echo "<br/>";
echo "Desconto";
echo "<br/>";
$reforma->addItem(new Item("Tijolo", 250));
$reforma->addItem(new Item("Saco de cimento 1kg", 250));
$reforma->addItem(new Item("Saco de cimento 1kg", 250));
$reforma->addItem(new Item("Saco de cimento 1kg", 250));
echo "<br/>";
echo $calculadoraDeDescontos->desconto($reforma);
?>
