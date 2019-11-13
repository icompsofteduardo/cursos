<?php

class ICCC extends Imposto
{

    public function __construct($imposto = null)
    {
        parent::__construct($imposto);
    }

    public function calcula(Orcamento $orcamento)
    {
        if ($orcamento->getValor() < 500) {
            return $orcamento->getValor() * 0.05;
        } else if ($orcamento->getValor() >= 1000) {
            return $orcamento->getValor() * 0.07;
        } else if ($orcamento->getValor() > 3000) {
            return $orcamento->getValor() * 0.08 + 30.00;
        }
    }
}
