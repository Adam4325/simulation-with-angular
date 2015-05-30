<?php
 

function pmt($apr, $term, $loan) {
  $term = $term;
  $apr = $apr / 1200;
       
  $amount = $apr * -$loan * pow((1 + $apr), $term) /
                (1 - pow((1 + $apr), $term));
       
  return $amount;
}
 
//echo pmt("2", 36, 20000000);
 
 
$hutang=20000000 ;
 
 
$mount=pmt("2", 36, $hutang);
 
$bunga=$hutang*2/1200;
       
$angsuran=$mount -  $bunga ;
 
echo "Monthly Payment :".$mount."<br/>";
echo "Interest : $bunga <br/>" ;
echo "Principal Debt : $angsuran <br/>" ;
echo "Balance : ".($hutang - $angsuran);