<?php get_header(); ?>

<section id="welcome-section">
    <div class="container animation">
        <div class="center">
            <h1>Welcome</h1>
            <p>Welcome to Fobert Websites, a portfolio website for Clinton Fobert. I'm a Frontend Developer and Graphic Designer based in Ogden, Utah. I specialize in creating responsive websites and web applications that are user-friendly and visually appealing. Below you will learn about me, my experience inside of the web development world, my projects with github links and a couple of WordPress websites that I've created. </p>
        </div>
    </div>
    <div class="wave"></div>
</section>

<section id="about-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 content-box animation">
                <h2>About Me</h2>
                <p>My name is Clinton Fobert and I'm a Frontend Developer and Graphic Designer based in Ogden, Utah. I specialize in creating responsive websites and web applications that are user-friendly and visually appealing. I have a passion for web development and design and I'm always looking for new ways to improve my skills. I'm currently working on expanding my knowledge of JavaScript and React. I'm also working on improving my design skills by learning Adobe XD and Figma. I'm excited to see where my journey in web development and design takes me and I'm looking forward to working on new projects and collaborating with other developers and designers.</p>
            </div>
            <div class="col-lg-6 img-box animation">
                <div class="slideshow-container">
                    <div class="slide"><img src="<?php echo THEME_IMG_PATH; ?>/about-photo1.jpg" alt="Image 1"></div>
                    <div class="slide"><img src="<?php echo THEME_IMG_PATH; ?>/about-photo2.jpg" alt="Image 2"></div>
                    <div class="slide"><img src="<?php echo THEME_IMG_PATH; ?>/about-photo3.jpg" alt="Image 3"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="experience-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 img-box animation">
                <img src="<?php echo THEME_IMG_PATH; ?>/experience-photo.jpg" alt="Clinton Fobert" class="img-fluid">
            </div>
            <div class="col-lg-6 content-box animation">
                <h2>Experience</h2>
                <p>I started my web developer and graphic design journey at Davis Technical College where I learn the basics of HTML5, CSS3, JavaScript, and Adobe products. After finishing the web development and graphic design course, I started my first job at DentalQore where I mastered HTML5, CSS3, and Adobe products. After expanding my knowledge of JavaScript, I started to self teach myself React.js and React Native until I got my next job at Hypercolor Digital were I worked and helped build web apps in React, TypeScript, and React Native. </p>
            </div>
        </div>
    </div>
</section>

<section id="projects-section">
    <div class="overlay"></div>
    <div class="container center animation">
        <h2>Projects</h2>
        <p>I am passionate about creating dynamic and responsive user interfaces, leveraging my expertise in HTML5, CSS3, JavaScript, React, TypeScript, and React Native. My portfolio showcases a variety of projects, including websites and applications designed with modern best practices and innovative features. Each project demonstrates my commitment to clean, maintainable code and seamless user experiences. Explore my GitHub for code repositories and live links to websites I've developed, highlighting my technical skills and dedication to front-end development.</p>
        <div class="projects-btn-box">
            <a class="main-btn" href="https://github.com/ClintonFobert1/react_petadoption-">GitHub | Pet Adoption React Site</a>
            <a class="main-btn" href="">GitHub | Portfolio Site</a>
            <a class="main-btn" href="">Intro Marketing Site</a>
            <a class="main-btn" href="https://www.elevatedroofingutah.com/">Elevated Roofing</a>
        </div>
    </div>
</section>

<section id="contact-section">
    <div class="container center animation">
        <h2>Contact</h2>
        <div class="form-container">
            <form action="send_email.php" method="post">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div class="captcha">
                    <div class="g-recaptcha" data-sitekey="6LcKyZkqAAAAADCyB5qU0f34LLRoyD9O77LeJN87"></div>
                </div>
                <div class="form-group">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </div>
    <div class="wave"></div>
</section>

<?php get_footer(); ?>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>