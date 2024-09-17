<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../resources/styles/output.css?<?= time() ?>" rel="stylesheet">
    <link href="../resources/styles/styles.css?<?= time() ?>" rel="stylesheet">
    <link href="../node_modules/swiper/swiper-bundle.min.css?<?= time() ?>" rel="stylesheet">
    <title>Studio SB</title>
</head>
<body class="w-screen overflow-x-hidden m-0">
  <div id="container" class="w-full m-auto">
      <?php include '../public/views/components/header.php' ?>
      <?php include '../public/views/components/slider.php' ?>
      <?php include '../public/views/contact.php' ?>
      <?php include '../public/views/components/footer.php' ?>
  </div>  
  <script src="../node_modules/swiper/swiper-bundle.min.js"></script>
  <script type="module" src="./js/carousel.js"></script>
  <script type="module" src="./js/slider.js"></script>
  <script src="https://kit.fontawesome.com/784d868413.js" crossorigin="anonymous"></script>
</body>
</html>