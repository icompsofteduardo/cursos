<?php
include("db.php");

$sql = "SELECT * FROM Contact";
$query = mysqli_query($conexao, $sql);

//faz um looping e cria um array com os campos da consulta
$rows = array('contacts' => array());
while ($contact = mysqli_fetch_assoc($query)) {
    $rows['contacts'][] = $contact;
}

//encoda para formato JSON
echo json_encode($rows);
