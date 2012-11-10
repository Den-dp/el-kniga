<?php
	$recivers = array(
		"artemzerro@mail.ru",
		"Denis.Bendrikov@gmail.com" //for testing
	);
	$hostMail = "no-reply@el-kniga.com.ua";
	if ( $_POST['action'] == "advice" ){
		$subject = "Заказ звонка (".$_POST['name'].")";
		$data =	"<b>".$_POST['name']."</b> заказал звонок.<br>"
					."Телефон: ".$_POST['tel']."<br>"
					."Почта: ".$_POST['email'];
	}else{
		$subject = "Покупка книжки (".$_POST['name'].")";
		$data =	"<b>".$_POST['name']."</b> заказал ".$_POST['device'].".<br>"
					."Телефон: ".$_POST['tel']."<br>"
					."Почта: ".$_POST['email'];
	}

	$message = iconv("UTF-8", "koi8-r", '<html><head><title>'.$subject.'</title></head><body>'.$data.'</body></html>');
	$subject = "=?koi8-r?B?".base64_encode(iconv("UTF-8", "koi8-r", $subject))."?=";
	$headers  = 'MIME-Version: 1.0'."\r\n";
	$headers .= "Content-type: text/html; charset=koi8-r;\r\n";
	$headers .= 'From: "el-kniga.com.ua" '.$hostMail."\r\n";

	foreach ($recivers as &$reciver) {
		mail($reciver, $subject, $message, $headers);
	}
?>