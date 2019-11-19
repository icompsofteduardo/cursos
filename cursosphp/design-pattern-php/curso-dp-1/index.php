<?php

$reforma = new Orcamento(490);
echo $reforma->getValor();
$reforma->aplicaDesconto();
echo "<br/>";
echo $reforma->getValor();
echo "<br/>";
echo "<br/>";

// Impostos

$calculadora = new CalculadoraDeImpostos();

echo "Impostos";
echo "<br/>";
echo $calculadora->calcula($reforma, new ICMS(new KCV()));
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
