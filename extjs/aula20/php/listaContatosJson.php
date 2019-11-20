<?php
include("db.php");

//sql query
$sql = "SELECT * FROM Contact";
$query = mysqli_query($conexao,$sql);
 
//interates the result and creates an array with each row
$rows = array();
while($contact = mysqli_fetch_assoc($query)) {
    $rows[] = $contact;
}
//JSON
echo json_encode($rows);
?>