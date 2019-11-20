<?php
//chama o arquivo de conexão com o bd
include("db.php");
$info = $_POST['contacts'];
$data = json_decode(stripslashes($info));

$nome = $data->nome;
$email = $data->email;

//consulta sql
$query = sprintf(
    "INSERT INTO Contact (nome, email) values ('%s', '%s')",
    mysqli_real_escape_string($conexao, $nome),
    mysqli_real_escape_string($conexao, $email)
);
$rs = mysqli_query($conexao, $query);

echo json_encode(array(
    "contatos" => array(
        "id" => mysql_insert_id(),
        "nome" => $nome,
        "email" => $email
    )
));