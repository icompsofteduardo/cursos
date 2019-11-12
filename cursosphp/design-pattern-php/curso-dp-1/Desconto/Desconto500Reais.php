<?php

class Desconto500Reais implements Desconto
{
    private $proximoDesconto;

    public function desconto(Orcamento $orcamento)
    {
        if ($orcamento->getValor() > 500) {
            return $orcamento->getValor() * 0.05;
        } else {
            return $this->proximoDesconto->desconto($orcamento);
        }
    }

    public function setProximo(Desconto $proximo)
    {
        $this->proximoDesconto = $proximo;
    }
}

?>
