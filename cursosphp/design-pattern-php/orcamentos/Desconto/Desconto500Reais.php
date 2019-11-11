<?php


class Desconto500Reais implements Desconto
{
    public function desconto(Orcamento $orcamento)
    {
        if ($orcamento->getValor() > 500) {
            return $orcamento->getValor() * 0.05;
        } else {
            return 0;
        }
    }

    public function setProximo(Desconto $proximo)
    {
        // TODO: Implement setProximo() method.
    }
}
