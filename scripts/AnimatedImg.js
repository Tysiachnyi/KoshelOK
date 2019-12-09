$( document ).ready(function() {
    FirstImage();
    SecondImage();
    ThirdImage();
    FourImage();
    FiveImage();
    mobilecheck();
});    

function FirstImage(){
// On window load. This waits until images have loaded which is essential
  
    $(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".test").fadeIn(500);

        // clone image
        $('.test').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.test').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 1000);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
}

function SecondImage(){
// On window load. This waits until images have loaded which is essential
  
    $(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".test2").fadeIn(500);

        // clone image
        $('.test2').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.test2').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 1000);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
}

function ThirdImage(){
// On window load. This waits until images have loaded which is essential
  
    $(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".test3").fadeIn(500);

        // clone image
        $('.test3').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.test3').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 1000);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
}

function FourImage(){
// On window load. This waits until images have loaded which is essential
  
    $(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".test4").fadeIn(500);

        // clone image
        $('.test4').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.test4').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 1000);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
}

function FiveImage(){
// On window load. This waits until images have loaded which is essential
  
    $(window).load(function(){

        // Fade in images so there isn't a color "pop" document load and then on window load
        $(".test5").fadeIn(500);

        // clone image
        $('.test5').each(function(){
            var el = $(this);
            el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
                var el = $(this);
                el.parent().css({"width":this.width,"height":this.height});
                el.dequeue();
            });
            this.src = grayscale(this.src);
        });

        // Fade image
        $('.test5').mouseover(function(){
            $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
        })
        $('.img_grayscale').mouseout(function(){
            $(this).stop().animate({opacity:0}, 1000);
        });
    });

    // Grayscale w canvas method
    function grayscale(src){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var imgObj = new Image();
        imgObj.src = src;
        canvas.width = imgObj.width;
        canvas.height = imgObj.height;
        ctx.drawImage(imgObj, 0, 0);
        var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        return canvas.toDataURL();
    }
}

function mobilecheck(){
    if($(window).width() < 767) {
        $('.Calculator').appendTo('.empty');
        } else {
        // change functionality for larger screens
        }
}