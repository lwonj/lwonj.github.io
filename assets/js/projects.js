$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/face_recogn.png',
            link: 'https://github.com/lwonj/Face_Recognition.git',
            title: '얼굴인식 도어락(팀)',
            technologies: ['Java', 'Python', 'Firebase'],
            description: "Raspberry-Pi와 Application이 무선통신을 하고 Raspberry-Pi와 Arduino가 시리얼통신을 하는 구조의 얼굴인식 도어록입니다.",
            categories: ['featured']
        },
        {
            image: 'assets/images/health_Care.png',
            link: 'https://github.com/lwonj/Health_Helper.git',
            title: '건강도우미 APP(팀)',
            technologies: ['Java', 'Kotlin', 'C'],
            description: "대학교 시절 2021년에 제작한 프로젝트입니다. 건강 관리 도우미 Application이며 회원가입 및 로그인, 만보기, 간단한 운동 설명, 달력기능을 구현하였습니다.",
            categories: ['featured']
        },
        {
            image: 'assets/images/park.png',
            link: 'https://github.com/lwonj/Find_Parking.git',
            title: '주차장 찾기 도우미 APP(개인)',
            technologies: ['Java'],
            description: "대학교 시절 2022년에 카카오맵 Api를 활용하여 대학교 주변 지역 주차시설을 찾게해주는 도우미 Application입니다.",
            categories: ['featured']
        },
        
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
