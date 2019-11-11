<?php


class ICMS implements Imposto
{
    public function calcula(Orcamento $orcamento)
    {
        if ($orcamento->getValor() > 500) {
            return $orcamento->getValor() * 0.15;
        } else {
            return $orcamento->getValor() * 0.05;
        }
    }
}