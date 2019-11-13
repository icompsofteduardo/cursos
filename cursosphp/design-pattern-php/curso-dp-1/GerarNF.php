<?php

date_default_timezone_set("Brazil/East");

require "NF/NotaFiscal.php";
require "Utils/Item.php";

$itens = array();

$itens[] = new Item("Tijolo", 250.00);
$itens[] = new Item("Cimento 1kg", 250.00);

$imposto = 500.00 * 0.2;
$notaFiscal = new NotaFiscal(
    "Icompsoft",
    "1234",
    $itens,
    500.00,
    $imposto,
    "Tijolos amarelos",
    date("Y-a-d h:i:s"));

echo "<pre>";
var_dump($notaFiscal);
?>
