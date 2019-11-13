<?php

class NotaFiscalBuilder
{
    private $empresa;
    private $cnpj;
    private $itens;
    private $valorBruto;
    private $valorImpostos;
    private $dataEmissao;
    private $observacoes;

    private $acoesAoGerar;

    function __construct()
    {
        $this->valorBruto = 0;
        $this->valorImpostos = 0;
        $this->itens = array();
        $this->acoesAoGerar = array();
    }

    public function addAcao(AcoesAoGerarNF $acao)
    {
        $this->acoesAoGerar[] = $acao;
    }

    public function comEmpresa($nomeEmpresa)
    {
        $this->empresa = $nomeEmpresa;
    }

    public function comCnpj($cnpj)
    {
        $this->cnpj = $cnpj;
    }

    public function addItem(Item $novoItem)
    {
        $this->itens[] = $novoItem;
        $this->valorBruto += $novoItem->getValor();
        $this->valorImpostos += $novoItem->getValor() * 0.2;
    }

    public function comObservacoes($obs)
    {
        $this->observacoes = $obs;
    }

    public function naData($data = null)
    {
        if (is_null($data)) {
            $this->dataEmissao = date("Y-m-d h:i:s");
        } else {
            $this->dataEmissao = $data;
        }
    }

    public function build()
    {
        $nf = new NotaFiscal($this->empresa,
            $this->cnpj,
            $this->itens,
            $this->valorBruto,
            $this->valorImpostos,
            $this->observacoes,
            $this->dataEmissao);

        foreach ($this->acoesAoGerar as $acao) {
            $acao->executa($nf);
        }
        return $nf;
    }
}
