<?php
header('content-type:text/html;charset="utf-8"');

$responseData = array("code"=>"0","msg"=>"注册成功");

$email = $_GET["email"];
$password = $_GET["password"];


if(!$email){
  $responseData["code"] = 1;
  $responseData["msg"] = "邮箱不能为空";
  echo json_decode($responseData);
  exit;
}else if(!preg_match("/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)$/",$email)){
  $reponseData["code"] = 2;
  $reponseData["msg"] = "邮箱格式错误";
  echo json_encode($reponseData);
  exit;
}

if(!$password){
  $responseData["code"] = 3;
  $responseData["msg"] = "密码不能为空";
  echo json_encode($responseData);
  exit;
}

// 链接数据库做判断
$link = mysql_connect("127.0.0.1","root","123456");

if(!$link){
  $responseData["code"]=4;
  $responseData["msg"] = "数据库链接失败";
  echo json_encode($responseData);
  exit;
}
// 设置访问字符集
mysql_set_charset("utf-8");
mysql_select_db("qd2003");


$sql = "SELECT * FROM steam_users WHERE email='{$email}'";

$res = mysql_query($sql);

$row = mysql_fetch_assoc($res);
// echo $row["password"];
if(!$row){
  $reponseData["code"] = 6;
  $reponseData["msg"] = "用户不存在";
  echo json_encode($reponseData);
  exit;
}else if($password != $row["password"]){
  $reponseData["code"] = 7;
  $reponseData["msg"] = "用户名或密码错误";
  echo json_encode($reponseData);
  exit;
}else if($password == $row["password"]){
  $reponseData["code"] = "0";
  $reponseData["msg"] = "登录成功";
  echo json_encode($reponseData);
  exit;
}








?>