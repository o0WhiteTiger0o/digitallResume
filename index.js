const get_animationBox = document.getElementsByClassName('animation_box')

const createTemplate = function(){
    //const get_bodyE = document.getElementsByTagName('body');
    const create_section_animation = document.createElement('section');
    document.body.appendChild(create_section_animation);
    create_section_animation.classList.add('get_animationBox');
    
}


for(let i=0; i<9; i++){
    createTemplate();
            
    
}

console.log(createTemplate());