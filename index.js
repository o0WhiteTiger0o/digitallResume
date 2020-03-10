const getMainSkill = document.querySelector('#mainSkills');
const data = {
    skills: ['HTML','CSS','LESS/SASS','JAVASCRIPT']
}


const createTemplate = function(){
    const createli = document.createElement('li');
    getMainSkill.appendChild(createli);
}


for(let i=0; i<data.skills.length; i++){
    createTemplate();
    let getLi = document.querySelectorAll('li');
    for(let i=0; i<getLi.length; i++){
            getLi[i].textContent = data.skills[i];
      
    }
            
    
}



