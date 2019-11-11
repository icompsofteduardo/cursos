<?php

function load($namespace)
{
    // str_replace trocará todas as barras \ por /
    $namespace = str_replace("\\" . "/", $namespace);

    $caminhoAbsoluto = __DIR__ . "/" . "$namespace" . ".php";

    return include_once $caminhoAbsoluto;
}

spl_autoload_register(__NAMESPACE__ . "\load");
?>
