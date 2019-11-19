
<?php
//chama o arquivo de conexão com o bd
include("conectar.php");
 
//consulta sql
$query = mysqli_query("SELECT * FROM Contato");
 
//faz um looping e cria um array com os campos da consulta
$rows = array('contatos' => array());
while($contato = mysqli_fetch_assoc($query)) {
    $rows['contatos'][] = $contato;
}
//encoda para formato JSON
echo json_encode($rows);
?>