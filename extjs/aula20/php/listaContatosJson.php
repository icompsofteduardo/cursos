<?php
//connect to db
include("db.php");
 
//sql query
$query = mysqli_query("SELECT * FROM Contact");
 
//interates the result and creates an array with each row
$rows = array();
while($contact = mysqli_fetch_assoc($query)) {
    $rows[] = $contact; 
}
//JSON
echo json_encode($rows);
?>