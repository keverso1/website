<!DOCTYPE html>
<html lang="en">
    
<head>
    <title>Kristin Everson's About Me Page</title>
    <link rel="stylesheet" href="styles.css" type="text/css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</head>

<body>
    <div id="container">
        <div id="header">
            <img src="homepage-banner.png" alt="About" width="1280px" height="225px">
         
        </div>

        <div id="content">
            <div id="nav">
                <nav>
                    <hr>
                    <a href="index.php" id="selected">Home</a> |
                    <a href="/Experience.php" id="selected">Experience</a> |
                    <a href="/Portfolio.php" id="selected">Portfolio</a>
                    <hr>
                </nav>
            </div>
            <div id="main">
                <h1>Hi, I'm Kris</h1>        
                <article id="hi">
                    <section id="hi" class="container">
                    <p><img src="kristin photo.jpg" alt="Hi, I'm Kris" height="250px"><p></p>
                            Local to Salt Lake City and what some would call a marketing professional. I've worked in the travel industry for 15+ years with a focus on all things marketing. 
                            <br>My favorite aspects of marketing include web design and development as well as overall marketing plans. I have experience as an account manager and love helping 
                            <br>people get their businesses to where they want them to be. 
                            <p>
                            In my free time I enjoy rafting, cooking, gardening, and creating stained glass suncatchers. 
                            <p></p>
                            
                        </p>
                        <?php
                            $mySkills = ["Account Management", "Business Development", "Contracting", "Data Management"];
                            echo 'My skills include: <p>';
                            foreach ($mySkills as $value) {
                            echo "$value <br>";
                            }
                        ?>

                    </section>
                </article>
                <hr>




                




                <div class="container">
                    <article id="Resume">
                    <section id="Resume" class="container">
                        <h2>Resume</h2>
                        Please download a copy of my resume <a id="resume-download" href="SLCC HTML COURSE - Kristin Everson 2021 Resume.docx">here</a>.    
                </div>
                <p></p>
                <hr>
                <br>
                <img src="salt-flats-banner.png" class="center" alt="about" width="1280px">
            </div>        
        </div>
        <div id="footer">
            Copyright &copy; 2021
        </div>
    </div>        
</body>
</html>