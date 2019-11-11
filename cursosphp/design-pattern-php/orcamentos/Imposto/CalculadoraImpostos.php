<?php

class CalculadoraImpostos
{

    public function calcula(Orcamento $orcamento, Imposto $imposto)
    {
        return $imposto->calcula($orcamento);
    }
}

?>

