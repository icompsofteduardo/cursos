<?php

class NotaFiscal
{
    private $empresa;
    private $cnpj;
    private $itens;
    private $valorBruto;
    private $valorImpostos;
    private $dataEmissao;
    private $observacoes;

    function __construct($nomeEmpresa, $cnpj, $listaItem, $valorBruto, $valorImpostos, $obs, $data)
    {
        $this->empresa = $nomeEmpresa;
        $this->cnpj = $cnpj;
        $this->itens = $listaItem;
        $this->valorBruto = $valorBruto;
        $this->valorImpostos = $valorImpostos;
        $this->observacoes = $obs;
        $this->dataEmissao = $data;
    }

    /**
     * @return mixed
     */
    public function getEmpresa()
    {
        return $this->empresa;
    }

    /**
     * @return mixed
     */
    public function getCnpj()
    {
        return $this->cnpj;
    }
}
