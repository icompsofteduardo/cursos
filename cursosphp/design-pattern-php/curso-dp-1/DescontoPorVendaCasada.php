<?php

class DescontoPorVendaCasada implements Desconto
{
    private $proximoDesconto;

    public function desconto(Orcamento $orcamento)
    {
        if (aconteceuVendaCasadaEm($orcamento)) return $orcamento->getValor() * 0.05;
        else return $this->proximoDesconto->desconto($orcamento);
    }

    public function aconteceuVendaCasadaEm(Orcamento $orcamento)
    {
        return $this->existe("CANETA", $orcamento)
            && $this->existe("LAPIS", $orcamento);
    }

    private function existe($nomeDoItem, Orcamento $orcamento)
    {
        foreach ($orcamento->getItens() as $item) {
            if ($item->getNome() == $nomeDoItem) return true;
        }
        return false;
    }

    public function setProximo(Desconto $proximo)
    {
        $this->proximoDesconto = $proximo;
    }
}

?>
