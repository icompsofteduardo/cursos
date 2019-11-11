<?php

require "Entity/Validacao.php";
require "Entity/ContaCorrente.php";

$contaJoao = new ContaCorrente("João", "404040", "203040", 5000);
$contaMaria = new ContaCorrente("Maria", "404040", "203040", 5000);
$contaAndre = new ContaCorrente("Maria", "404040", "203040", 5000);

$contaJoao->sacar(400)->depositar(2500);
$contaMaria->depositar(1500)->sacar(4000);

var_dump($contaMaria, $contaJoao);

$contaJoao->transferir(20.00, $contaMaria);

var_dump($contaMaria, $contaJoao);

echo $contaMaria->sacar("maria");
var_dump($contaMaria, $contaJoao);

?>
