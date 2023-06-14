var navbarItems =
                `
                <ul class="navlist">
                        <li class="nav1"><a href="index.html">HOME</a></li>
                        <li class="nav2"><a href="resume.html">RESUME</a></li>
                        <li class="nav3"><a href="projects.html">PROJECTS</a></li>
                        <li class="nav4"><a href="free.html">BLOG</a></li>
                </ul>
                `


putHtmlCodeIntoNavbar(navbarItems);



function putHtmlCodeIntoNavbar(htmlCode) {
    // Get the nav element.
    var navbar = document.getElementById('navbar');
  
    // Append the HTML code to the nav element.
    navbar.innerHTML = htmlCode;
  }

