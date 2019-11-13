<?php

class Aprovado implements EstadoDeUmOrcamento
{
    public function aplica(Orcamento $orcamento)
    {
        $orcamento->setValor($orcamento->getValor()
            - $orcamento->getValor() * 0.05);
    }

    public function aprova(Orcamento $orcamento)
    {
        throw new Exception("Esse orçamento já se encontra aprovado");
    }

    public function reprova(Orcamento $orcamento)
    {
    }

    public function finaliza(Orcamento $orcamento)
    {
        // TODO: Implement finaliza() method.
    }
}

?>

