<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="/comments/<%=comment._id%>/edit" method="POST">
    <textarea name="text" id="" cols="30" rows="10" ><%=comment.text%></textarea>
    <input type="submit" name="" id="" value="Update Comment">
  </form>
</body>
</html> 