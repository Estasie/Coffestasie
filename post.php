<?php
$host = '127.0.0.1'; // адрес сервера 
$database = 'landing'; // имя базы данных
$user = 'root'; // имя пользователя
$password = '';
$db_table = 'landingcoffee';

require_once 'post.php'; // подключаем скрипт
 
// подключаемся к серверу
// $link = mysqli_connect($host, $user, $password, $database) 
//     or die("Ошибка " . mysqli_error($link));
 
    $name = $_POST['name'];
    $email = $_POST['email']; 
    $tel = $_POST['tel'];
    $agreement = $_POST['agreement'];
    

    
try{
    $db = new PDO("mysql:host=$host;dbname=$database", $user, $password);
    $query = "INSERT INTO landingcoffee (FullName, Email, Tel, Agreement)
    VALUES (`$name`, `$email`, `$tel`, `$agreement` )";
    $st = $db-> query($query);
    $arrItems = $st-> fetchAll();
    foreach($arrItems as $k=> $arrItem){
      $arrItems[$k] = array_unique($arrItem);                          
    }
    
 }
catch(PDOException $e){
  die($e-> getMessage());
}


// try {
//     // Подключение к базе данных
//     $db = new PDO("mysql:host=$host;dbname=$database", $user, $password);
//     // Устанавливаем корректную кодировку
//     $db->exec("set names utf8");
//     // Собираем данные для запроса
//     $data = array( 'name' => $name, 'email' => $email, 'tel' => $tel, 'agreement' => $agreement ); 
//     // Подготавливаем SQL-запрос
//     $query = $db->prepare("INSERT INTO $db_table (name, email, tel, agreement) values (:name, :email, :tel, :agreement)");
//     // Выполняем запрос с данными
//     $query->execute($data);
//     // Запишим в переменую, что запрос отрабтал
//     $result = true;
// } catch (PDOException $e) {
//     // Если есть ошибка соединения или выполнения запроса, выводим её
//     print "Ошибка!: " . $e->getMessage() . "<br/>";
// }



// выполняем операции с базой данных
// $query =""INSERT INTO `JobApplications`(`Name`, `Email`, `Tel`, `Agreement) VALUES ('$name','$email','$tel','$agreement')"";
// $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
// if($result)
// {
//     echo "Выполнение запроса прошло успешно";
// }
// // закрываем подключение
// mysqli_close($link);
?>