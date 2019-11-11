<?php


class SemDesconto implements Desconto
{
    public function desconto(Orcamento $orcamento)
    {
        return 0;
    }

    public function setProximo(Desconto $proximo)
    {
        // TODO: Implement setProximo() method.
    }
}
