<?php
require_once "Desconto/Desconto5Itens.php";
require_once "Desconto/Desconto500Reais.php";
require_once "Desconto/SemDesconto.php";
require_once "Desconto/Desconto.php";

class CalculadoraDescontos
{

    public function desconto(Orcamento $orcamento)
    {
        $desconto5Itens = new Desconto5Itens();
        $desconto500Reais = new Desconto500Reais();
        $desconto300Reais = new Desconto300Reais();
        $semDesconto = new SemDesconto();

        $desconto5Itens->setProximo($desconto500Reais);
        $desconto500Reais->setProximo($semDesconto);
        $desconto300Reais->setProximo($semDesconto);
        $valorDesconto = $desconto5Itens->desconto($orcamento);

        return $valorDesconto;
    }
}

?>
