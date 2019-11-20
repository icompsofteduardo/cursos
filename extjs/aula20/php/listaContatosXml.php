<?php
header("Content-type: text/xml");

include("db.php");
$sql = "SELECT * FROM Contact";

//sql query
$query = mysqli_query($conexao, $sql);
 
//interates the result and creates an array with each row
$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
$xml.="<contacts>";
$rows = array();
while($contact = mysqli_fetch_assoc($query)) {
    $xml.=   "<contact>";
    $xml.=      "<id>" . $contact['ID'] . "</id>";
    $xml.=      "<name>" . $contact['name'] . "</name>";
    $xml.=      "<email>" . $contact['email'] . "</email>";
    $xml.=   "</contact>";
}
$xml.="</contacts>";
      
//envia resultado do XML
echo $xml;
?>