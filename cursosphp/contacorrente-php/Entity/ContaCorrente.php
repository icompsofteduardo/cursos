<?php

class ContaCorrente
{
    private $titular;
    private $numero;
    private $agencia;
    private $saldo;

    public function __construct($titular, $agencia, $numero, $saldo)
    {
        $this->titular = $titular;
        $this->agencia = $agencia;
        $this->numero = $numero;
        $this->saldo = $saldo;
    }

    public function __get($atributo)
    {
        Validacao::protegeAtributo($atributo);
        return $this->$atributo;
    }

    public function __set($atributo, $valor)
    {
        Validacao::protegeAtributo($atributo);
        $this->$atributo = $valor;
    }

    public function sacar($valor)
    {
        Validacao::verificaNumerico($valor);
        $this->saldo = $this->saldo - $valor;
        return $this;
    }

    public function depositar($valor)
    {
        Validacao::verificaNumerico($valor);
        $this->saldo = $this->saldo + $valor;
        return $this;
    }

    public function transferir($valor, $conta)
    {
        Validacao::verificaNumerico($valor);
        $this->sacar($valor);
        $conta->depositar($valor);

        return $this;
    }

    private function formataSaldo($saldo)
    {
        return number_format($this->saldo, 2, ",", ".");
    }

    public function __toString()
    {
        return $this->titular;
    }
}

?>
