class Background{
    constructor(){
    }

    draw(ctx, src){
        var img = new Image();
        img.src = src;
        img.onload = function(){
            ctx.drawImage(img, 0, 0)
        }
    }

    
}


