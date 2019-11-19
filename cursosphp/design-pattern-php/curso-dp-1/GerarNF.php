<?php

date_default_timezone_set("Brazil/East");


function carregaClasse($nomeClasse)
{
    require $nomeClasse.".php";
}

spl_autoload_register("carregaClasse");

$geradorDeNotas = new NotaFiscalBuilder();

$geradorDeNotas->comEmpresa("Icompsoft");
$geradorDeNotas->comCnpj("1234");
$geradorDeNotas->addItem(new Item("Tijolo", 250.00));
$geradorDeNotas->addItem(new Item("Cimento 1kg", 250.00));
$geradorDeNotas->addItem(new Item("Cimento 1kg", 250.00));
$geradorDeNotas->addItem(new Item("Cimento 1kg", 250.00));
$geradorDeNotas->comObservacoes("Tijolos amarelos");
$geradorDeNotas->naData();

// Ações

$geradorDeNotas->addAcao(new Impressora());
$geradorDeNotas->addAcao(new NotaFiscalDao());
$geradorDeNotas->addAcao(new EnviadorDeSMS());

$notaFiscal = $geradorDeNotas->build();

echo "<pre>";
var_dump($notaFiscal);
?>
