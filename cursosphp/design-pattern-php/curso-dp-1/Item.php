<?php


class Item
{
    private $nome;
    private $valor;

    function __construct($novoNome, $novoValor)
    {
        $this->valor = $novoValor;
        $this->nome = $novoNome;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function getValor()
    {
        return $this->valor;
    }
}
