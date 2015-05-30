<?php
$response =   file_get_contents('php://input');
$response = json_decode($response);
foreach ($response as $key ) {
	# code...
	echo $key->no;
	echo $key->angsuran;
	echo $key->debt;
	echo $key->balance;
}
 
?>
