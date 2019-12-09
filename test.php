<?php
        session_start();
        include("mysql_connect.php");
?>
<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>第二十九屆全國資訊安全會議</title>
        <!-- import CSS -->
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chal                                  k/index.css">
        <link rel='stylesheet' href="css/style.css" type="text/css" />
        <script type="text/javascript">
                function oncheck(){
                        if(document.registration.file.value.length == 0){
                                alert("請上傳繳費證明！");
                                eval("document.registration['file'].focus()");
                                return false;
                        }else{
                                var validExts = new Array(".pdf");

                                var fileExt = file.value;
                                fileExt = fileExt.substring(fileExt.lastIndexOf(                                  '.'));
                                if (validExts.indexOf(fileExt) < 0) {
                                        alert("檔案類型錯誤，請繳交pdf檔");
                                        file.value = null;
                                        return false;
                                }
                        }

                        registration.submit();
                }
        </script>
</head>
<body>
        <div align="center">
                <form name="registration" method="post" action="paymentfilesucce                                  ss.php" enctype="multipart/form-data">
                        上傳繳費證明：
                        <input type="file" name="file" id="file" accept=".pdf">
                        <br><br>
                        <input type="button" class="btn btn-success" value="送出                                  " onClick="oncheck()">
                        <br>
                </form>
        </div>
</body>
</html>