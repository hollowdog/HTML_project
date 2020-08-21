<?php
header('content-type:text/html;charset="utf-8"');

$reponseData = array("code"=>0,"msg"=>"");

// 将传过来的数据全部取出
$email = $_POST["email"];
$password = $_POST["password"];
$repassword = $_POST["repassword"];
$createtime = $_POST["createtime"];

// 进行简单验证
if(!$email){
  $reponseData["code"] = 1;
  $reponseData["msg"] = "邮箱不能为空";
  echo json_encode($reponseData);
  exit;
}else if(!preg_match(/^[a-zA-Z]\w+@\w+\.[a-zA-Z]+$/,$email)){
  $reponseData["code"] = 2;
  $reponseData["msg"] = "邮箱格式错误";
  echo json_encode($reponseData);
  exit;
}
if(!$password){
  $reponseData["code"] = 3;
  $reponseData["msg"] = "密码不能为空";
  echo json_encode($reponseData);
  exit;
}
if($password != $repassword){
  $reponseData["code"] = 4;
  $reponseData["msg"] = "两次输入的密码不一致";
  echo json_encode($reponseData);
  exit;
}


// 链接数据库进行判断
$link = mysql_connect("127.0.0.1","root","123456");

// 判断链接是否成功
if(!$link){
  $reponseData["code"] = 5;
  $reponseData["msg"] = "服务繁忙";
  echo json_encode($reponseData);
  exit;
}

// 3.设置访问字符集
mysql_set_charset("utf-8");
// 4.选择数据库
mysql_select_db("qd2003");

// 5.准备sql，判断之前是否注册过
$sql = "SELECT * FROM steam_users WHERE email='{$email}'";

// 发送
$res = mysql_query($sql);

// 取出一行
$row = mysql_fetch_assoc($res);

// 做判断
if($row){
  $reponseData["code"] = 6;
  $reponseData["msg"] = "用户已存在";
  echo json_encode($reponseData);
  exit;
}

// 密码加密处理
$str = md5($password);

$sql2 = "INSERT INTO steam_users(email,password,createtime) VALUES('{$email}','{$password}','{$createtime}')";


$res = mysql_query($sql2);

if($res){
  $responseData["msg"]="注册成功";
  echo json_encode($reponseData);
  exit;
}else{
  $reponseData["code"]=7;
  $reponseData["msg"]="注册失败";
  echo json_encode($reponseData);
  exit;
}

mysql_close();


?>
