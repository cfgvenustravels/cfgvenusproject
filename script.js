body,html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: block;
    position: relative;
    overflow: hidden;
    font-family: 'Slabo 27px', serif;
    font-size: 16px;
}

h1,h2,h3,h4,h5,h6 {
    padding: 0;
    margin: 0;
}
ul,li,p {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
.wrapper {
    height: 100%;
    width: 100%;
    display: block;
    overflow: hidden;
}
.wrapper .container {
    height: 100%;
    width: 100%;
    display: block;
    overflow: hidden;
}

.slideshow {
    height: 100%;
    width: 100%;
    display: block;
    overflow: hidden;
}
.slideshow .slideshow-left {
    width: 40%;
    float: left;
    position: relative;
    height: 100%;
}
.slideshow .slideshow-left .Lslide {
    height: 100%;
    display: block;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    top: 0;
    left: 0;
    right: 0;
}  
.slideshow .Lslide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}
.slideshow .Lslide-content h2 {
    color: #fff;
    font-weight: 600;
    font-size: 60px;
    line-height: 0.8;
}
.slideshow .Lslide-content p {
    color: #fff;
    padding: 2.5em 0em;
}
.slideshow .Lslide-content .button {
    background-color: #fff;
    display: inline-block;
    border-radius: 25px;
    position: relative;
}
.slideshow .Lslide-content .button i {
    float: right;
    position: absolute;
    top: 50%;
    right: 2.5em;
    color: #000;
    font-size: 9px;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transition: all 0.3s;
}
.slideshow .Lslide-content .button:hover i {
    right: 1.7em;
}
.slideshow .Lslide-content .button p {
    margin: 0;
    padding: 0;
    color: #000;
    text-align: left;
    padding: 0.8em 8em 0.8em 1.5em;
    font-size: 12px;
    font-weight: 600;
}
.slideshow .slideshow-right {
    width: 60%;
    float: left;
    position: relative;
    height: 100%;    
}     
.slideshow .slideshow-right .Rslide {
    height: 100%;
    display: block;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    top: 0;
    left: 0;
    right: 0;
}  
.slideshow .slideshow-right .Rslide img {
    min-width: 100%;
}
.control {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
}    
.control i {
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    text-align: center;
    position: absolute;
    color: #aaaaaa;
    transition: all 0.3s;
    -ms-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
}    
.control .control-top {
    width: 45px;
    height: 50px;
    background-color: #fff;
    z-index: 5;
    position: relative;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
}
.control .control-top:hover i {
    color: #333333;
}
.control .control-bottom {
    width: 45px;
    height: 50px;
    background-color: #fff;
    z-index: 5;
    position: relative;
    border-radius: 4px 0px 0px 4px;
    left: -45px;
    cursor: pointer;
}  
.control .control-bottom:hover i {
    color: #333333;
}              