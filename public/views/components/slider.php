<div class="slider w-full overflow-hidden relative">
    <div class="list flex">
        <div id="home" class="item flex justify-center items-center box-border">
            <div class="content text-center">
                <?php include '../public/views/home.php' ?>
            </div>
        </div>
        <div id="about" class="item flex justify-center items-center box-border">
            <div class="content text-center">
                <?php include '../public/views/about.php' ?>
            </div>
        </div>
        <div id="portfolio" class="item flex justify-center items-center box-border">
            <div class="content text-center">
                <?php include '../public/views/portfolio.php' ?>
            </div>
        </div>
        <div id="services" class="item flex justify-center items-center box-border">
            <div class="content text-center">
                <?php include '../public/views/services.php' ?>
            </div>
        </div>
    </div>

    <div class="nextPrevArrows">
        <button class="prev"> < </button>
        <button class="next"> > </button>
    </div>
</div>