<?php

class Reprovado implements EstadoDeUmOrcamento
{
    public function aplica(Orcamento $orcamento)
    {
        throw new Exception("Um orçamento reprovado não pode receber descontos");
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
