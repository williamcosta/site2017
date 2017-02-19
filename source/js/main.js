'use strict';

var speakersData = [
  {
    name: 'Fábio Vedovelli',
    role: 'Trabalha atualmente como Web developer para Octimine GmbH (Munique/Alemanha) e é entusiasta Vue.js',
    label: '@vedovelli',
    link: 'http://twitter.com/vedovelli',
    photo: 'assets/images/fabio-vedovelli-frontinsampa.jpg'
  },
  {
    name: 'Bianca Brancaleone',
    role: 'Sócia do Eu Compraria, Especialista em UX e Google Expert em UX, organizadora do GDG e Women Techmakers de Sorocaba',
    label: '@biab',
    link: 'http://twitter.com/biab',
    photo: 'assets/images/bianca-brancaleone-frontinsampa.jpg'
  },
  {
    name: 'Raphael Fabeni',
    role: 'Desenvolvedor na RedVentures e criador/organizador do #MeetupCSS SP',
    label: '@raphaelfabeni',
    link: 'http://twitter.com/raphaelfabeni',
    photo: 'assets/images/raphael-fabeni-frontinsampa.jpg'
  },
  {
    name: 'Patrícia Silva',
    role: 'Front-end Developer at MATERA Systems (Campinas/SP)',
    label: '@Paty_Go',
    link: 'http://twitter.com/Paty_Go',
    photo: 'assets/images/patricia-silva-frontinsampa.jpg'
  },
  {
    name: 'Bruno Genaro',
    role: 'Desenvolvedor Front-End na Cisco em Orlando/FL (USA) e organizador do OrlandoJS Meetup.',
    label: '@bfgenaro',
    link: 'http://twitter.com/bfgenaro',
    photo: 'assets/images/bruno-genaro-frontinsampa.jpg'
  },
  {
    name: 'Call4papers',
    role: 'Seja um(a) palestrante do nosso evento',
    label: 'EM BREVE',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Call4papers',
    role: 'Seja um(a) palestrante do nosso evento',
    label: 'EM BREVE',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Call4papers',
    role: 'Seja um(a) palestrante do nosso evento',
    label: 'EM BREVE',
    link: '/',
    photo: 'assets/images/speaker.jpg'
  }
]

var timeline = [
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  },
  {
    hour: '08:00 - 09:00',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: 'John Doe',
    link: 'http://www.teste.com'
  }
]

const timelineTemplate = (timeline) => {
  return timeline.map((item) => {
    return (
      `
        <div class="timeline-block">
          <div class="timeline-circle"></div>
          <div class="timeline-content">
            <h3>${ item.title }</h3>
            <p>${ item.hour }</p>
            <p>${ item.description }</p>
            <p class="timeline-speaker">${ item.speaker }</p>
            <p><a href="#">+ detalhes</a></p>
          </div>
        </div>
      `
    )
  }).join('')
}

const speakerTemplate = (speaker) => {
  return speaker.map((item) => {
    return (
      `
        <figure class="speaker-item">
          <img src="${ item.photo }" alt="Palestrante ${ item.name }">
          <figcaption>
            <p>${ item.name }</p>
            <p>
              ${ item.role }
              <a href="${ item.link }" target="_blank">${ item.label }</a>
            </p>
          </figcaption>
        </figure>
      `
    )
  }).join('')
}

const clickMenu = () => {
  let taskItems = document.querySelectorAll('[data-menu-link]');

  for ( let i = 0, len = taskItems.length; i < len; i++ ) {
    let taskItem = taskItems[i];
    contextMenuListener(taskItem);
  }
}

const contextMenuListener = (menu) => {
  let navCheckbox = document.querySelector('[data-check]');
  let button = document.querySelector('.menu-button');

  menu.addEventListener( "click", function(e) {
    button.click()
  });

}

window.onload = function () {
  clickMenu();
  // const timelineContainer = document.querySelector('[data-schedule]')
  const speakersContainer = document.querySelector('[data-speaker]')
  // timelineContainer.innerHTML = timelineTemplate(timeline);
  speakersContainer.innerHTML = speakerTemplate(speakersData);
};
