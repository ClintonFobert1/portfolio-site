<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <?php wp_head(); ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clinton's Portfolio Site</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="javascript" href="../js/script.js">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Iceland&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Iceland&family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header>

<div id="wrapper">
    <main id="content" role="main">
        <div class="overlay"></div>
        <div class="banner">
            <div class="container">
                <nav class="navbar">
                    <a href="#about-section">About</a>
                    <a href="#experience-section">Experience</a>
                    <a href="#projects-section">Projects</a>
                    <a href="#contact-section">Contact</a>
                </nav>
                <div class="banner-content center animation">
                    <h2 class="large">Fobert Websites</h2>
                    <p>Frontend Developer & Graphic Designer</p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/clinton-fobert-1b1b3b1b1/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="36" height="36" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg></a>
                        <a href="https://github.com/ClintonFobert1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="36" height="36" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 0 C 20.147 0 0 20.467 0 45.714 C 0 67.034 14.367 84.944 33.802 90 c -0.013 -5.283 -0.03 -11.763 -0.04 -13.782 c -12.986 2.869 -15.726 -5.595 -15.726 -5.595 c -2.123 -5.481 -5.183 -6.939 -5.183 -6.939 c -4.236 -2.943 0.319 -2.883 0.319 -2.883 c 4.687 0.334 7.156 4.887 7.156 4.887 c 4.163 7.249 10.92 5.153 13.584 3.942 c 0.419 -3.064 1.628 -5.157 2.964 -6.341 c -10.368 -1.199 -21.268 -5.265 -21.268 -23.435 c 0 -5.177 1.824 -9.407 4.81 -12.728 c -0.485 -1.195 -2.083 -6.018 0.452 -12.55 c 0 0 3.92 -1.274 12.84 4.861 c 3.724 -1.051 7.717 -1.578 11.684 -1.596 c 3.967 0.018 7.963 0.545 11.694 1.596 c 8.91 -6.135 12.824 -4.861 12.824 -4.861 c 2.541 6.532 0.943 11.355 0.458 12.55 c 2.993 3.321 4.804 7.551 4.804 12.728 c 0 18.214 -10.92 22.223 -21.315 23.398 c 1.674 1.472 3.166 4.357 3.166 8.781 c 0 3.513 -0.016 11.601 -0.031 17.74 C 76.021 84.439 90 66.74 90 45.714 C 90 20.467 69.853 0 45 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg></a>
                        <a href="https://x.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="36" height="36" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><polygon points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #ffffff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg></a>
                    </div>
                </div>
            </div>
        </div>
</header>

<?php get_template_part('page'); ?>