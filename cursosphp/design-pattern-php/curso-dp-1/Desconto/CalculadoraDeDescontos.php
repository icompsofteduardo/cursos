<?php
require_once "Desconto/Desconto5Itens.php";
require_once "Desconto/Desconto500Reais.php";
require_once "Desconto/SemDesconto.php";

class CalculadoraDeDescontos
{
    public function desconto(Orcamento $orcamento)
    {
        $desconto5Itens = new Desconto5Itens();
        $desconto500Reais = new Desconto500Reais();
        $semDesconto = new SemDesconto();

        $desconto5Itens->setProximo($desconto500Reais);
        $desconto500Reais->setProximo($semDesconto);

        return $desconto5Itens->desconto($orcamento);
    }
}

?>
