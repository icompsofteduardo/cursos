<?php

interface Desconto
{
    public function desconto(Orcamento $orcamento);

    public function setProximo(Desconto $proximo);
}
?>
