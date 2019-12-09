<?php
        include("mysql_connect.php");

        if ($_FILES["file"]["error"] > 0){
                echo "Error: " . $_FILES["file"]["error"];
                echo "<script type='text/javascript'>";
                echo "alert('檔案上傳錯誤！！！');";
                echo "history.back();";
                echo "</script>";
        }else{
                echo $_FILES["file"]["tmp_name"]."<br>";
                $file = "paymentfile/".$_FILES['file']['name'];
                echo $file;

                move_uploaded_file($_FILES["file"]["tmp_name"],"paymentfile/".$_FILES["file"]["name"]);

                $file = "paymentfile/".$_FILES['file']['name'];

                /*$sql = "INSERT INTO paymentfile ( P_file ) VALUES ( '$file' )";
                $result = mysqli_query($conn,$sql);

                if($result){
                        echo "<script type='text/javascript'>";
                        echo "alert('新增成功！！！');";
                        echo "</script>";
                        echo '<meta http-equiv="refresh" content="0;url=paymentfile.php" />';
                }else{
                        echo "<script type='text/javascript'>";
                        echo "alert('新增失敗！！！');";
                        echo "history.back();";
                        echo "</script>";
                }*/

                mysqli_close($conn);
        }
?>