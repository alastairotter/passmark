<?php


$hostname = "localhost:8889";
$mysql_login = "root";
$mysql_password = "root";
$database = "sona";




$db = new mysqli($hostname, $mysql_login, $mysql_password, $database);
	if($db->connect_errno > 0){ die('Unable to connect to database [' . $db->connect_error . ']'); }





$sql = "SELECT * from words";

$query = $db->query($sql);

$id = 0; 

while($row = $query->fetch_row()){
    
    $date = str_replace("/","-", $row[1]);
    echo $date;
        
    $topic = $row[2];
    $words = $row[4];
    
    $wordlist[$id]['date'] = 
    

    
    
//    $words[$id]['id'] = $id;
//    $words[$id]['topic'] = $row[0];
////    echo $id . " - " . $row[0]."<br/>";
//    $id++;
    
		
	}

//var_dump($words);

// Update IDs

//foreach ($words as $word) { 
//    
//    echo $word['id'] . " - " . $word['topic'] . "<br/>";
//    $topic = $word['topic'];
//    $id = $word['id'];
//    
//    $sql = "UPDATE `words` SET `id`='$id' WHERE `Topic` = '$topic'";
//    $query = $db->query($sql);
//}


// UPDATE STATS

//$sql = "SELECT * from headlines where author = ''";
//
//$count = $db->query($sql);
//$count = $count->num_rows;
//
//echo $count . "rows still need processing";


?>