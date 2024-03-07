class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

    <header class="header text-center">
        <h1 class="blog-name pt-lg-4 mb-0"><a href="index.html">LYC's Web</a></h1>

        <nav class="navbar navbar-expand-lg navbar-dark">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>

            <div id="navigation" class="collapse navbar-collapse flex-column">
                <div class="profile-section pt-3 pt-lg-0">
                    <img class="profile-image mb-3 rounded-circle mx-auto" src="assets/images/profile.jpg" alt="image">

                    <div class="bio mb-3">My name is LIANG, Yuchen (梁宇辰) Eric. Currently a student at HKUST.<br><a href="aboutme.html" >Learn more about me</a></div>
                    <!--//bio-->
                    <!-- <ul class="social-list list-inline py-3 mx-auto">
                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-github-alt fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fab fa-codepen fa-fw"></i></a></li>
                    </ul> -->
                    <!--//social-list-->
                    <hr>
                </div>
                <!--//profile-section-->

                <ul class="navbar-nav flex-column text-left">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2"></i>Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aboutme.html"><i class="fas fa-user fa-fw mr-2"></i>About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html"><i class="fas fa-bookmark fa-fw mr-2"></i>Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html"><i class="fas fa-phone fa-fw mr-2"></i>Contact Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cycling.html"><i class="fa fa-bicycle fa-fw mr-2"></i>Cycling</a>
                    </li>
                </ul>

                <!-- <div class="my-2 my-md-3">
                    <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
                </div> -->
            </div>
        </nav>
    </header>
        `
    }
}

customElements.define('my-header', myHeader)


class myHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
            
        </head>
        `
    }
}

customElements.define('my-head', myHead)


class myFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer text-center theme-bg-dark">
                <small class="copyright">© 2022-2024 LYC, Created by Yuchen Eric LIANG using template designed by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a></small>
                <!-- <div> -->
                    <!-- <small class="copyright">© 2022 LYC, Created by Yuchen Eric LIANG using template designed with <i class="fas fa-heart" style="color: #fb866a;"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers </small> -->
                    <!-- <small><a href="https://beian.miit.gov.cn/">京ICP备2020037052号-1</a> | </small>
                    <small><img src="assets/images/ICP.png" class="wp-image-67 style-992-image style-local-176-f31-image" alt="">
                        京公网安备 11010802033071 号
                    </small> -->
                    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
                <!-- </div> -->

            </footer>
        `
    }
}

customElements.define('my-footer', myFooter)

// class myHeader extends HTMLElement {
//     connectedCallback(){
//         this.innerHTML = `

//         `
//     }
// }

// customElements.define('my-header',myHeader)