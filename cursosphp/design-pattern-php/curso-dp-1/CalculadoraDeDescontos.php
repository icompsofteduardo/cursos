<?php
require_once "Desconto/DescontoTipos/Desconto5Itens.php";
require_once "Desconto/DescontoTipos/Desconto500Reais.php";
require_once "Desconto/DescontoTipos/Desconto300Reais.php";
require_once "Desconto/DescontoTipos/SemDesconto.php";
require_once "Desconto/DescontoTipos/DescontoPorVendaCasada.php";

class CalculadoraDeDescontos
{
    public function desconto(Orcamento $orcamento)
    {
        $desconto5Itens = new Desconto5Itens();
        $desconto500Reais = new Desconto500Reais();
        $desconto300Reais = new Desconto300Reais();
        $descontoPorVendaCasada = new DescontoPorVendaCasada();
        $semDesconto = new SemDesconto();

        $desconto5Itens->setProximo($desconto500Reais);
        $desconto500Reais->setProximo($desconto300Reais);
        $desconto300Reais->setProximo($descontoPorVendaCasada);
        $descontoPorVendaCasada->setProximo($semDesconto);

        return $desconto5Itens->desconto($orcamento);
    }
}

?>
