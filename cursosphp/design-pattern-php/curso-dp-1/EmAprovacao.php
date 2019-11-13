<?php

class EmAprovacao implements EstadoDeUmOrcamento
{
    public function aplica(Orcamento $orcamento)
    {
        $orcamento->setValor($orcamento->getValor()
            - $orcamento->getValor() * 0.02);
    }

    public function aprova(Orcamento $orcamento)
    {
        // TODO: Implement aprova() method.
    }

    public function reprova(Orcamento $orcamento)
    {
        // TODO: Implement reprova() method.
    }

    public function finaliza(Orcamento $orcamento)
    {
        // TODO: Implement finaliza() method.
    }
}

?>
