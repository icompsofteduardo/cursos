<?php
 
//nome do servidor (127.0.0.1)
$servidor = '127.0.0.1:80';
 
//usuário do banco de dados
$user = "root";
 
//senha do banco de dados
$senha = "sa1234";
 
//nome da base de dados
$db = "sencha";
 
//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$conexao = mysqli_connect($servidor,$user,$senha, $db);
 
//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
$banco = mysqli_select_db($db, $conexao);
 
?>