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
            <h3 class="text-medium">${ item.title }</h3>
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
            <p class="text-large">${ item.name }</p>
            <p>
              ${ item.role }
              <a href="${ item.link }" aria-label="Ir ao twitter de ${ item.name }" target="_blank">${ item.label }</a>
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
  let button = document.querySelector('[data-menu-mobile]');

  menu.addEventListener('click', () => {
    button.click()
  });
}

const toogleInvertColor = () => {
  let elem = document.querySelector('[data-invert-color]');
  elem.addEventListener('click', () => {
    document.body.classList.toggle('invert-color');
  })
}

class FontSize {
  constructor() {
    this.fontSize = document.querySelector('[data-font-size]');
    this.fontSizeMore = this.fontSize.querySelector('[data-font-size-more]');
    this.fontSizeLess = this.fontSize.querySelector('[data-font-size-less]');

    if(!this.fontSize.hasAttribute('data-font-size-min')) {
      console.error('data-font-size-min is required attribute to FontSize module.');
      return;
    }

    if(!this.fontSize.hasAttribute('data-font-size-max')) {
      console.error('data-font-size-max is required attribute to FontSize module.');
      return;
    }

    if(typeof parseInt(this.fontSize.getAttribute('data-font-size-max')) !== 'number') {
      console.error('data-font-size-max must be a number.');
      return;
    }

    if(typeof parseInt(this.fontSize.getAttribute('data-font-size-min')) !== 'number') {
      console.error('data-font-size-min must be a number.');
      return;
    }

    this.settingsFontSizeMin = this.fontSize.getAttribute('data-font-size-min');
    this.settingsFontSizeMax = this.fontSize.getAttribute('data-font-size-max');

    this.init();
  }

  increaseSize() {
    var n = this.getBodySize();

    if(n < this.settingsFontSizeMax) {
      n += 10;
    }

    this.setSize(n);
    this.setBodySize(n);
  }

  decreaseSize() {
    var n = this.getBodySize();

    if(n > this.settingsFontSizeMin) {
      n -= 10;
    }

    this.setSize(n);
    this.setBodySize(n);
  }

  setSize(size) {
    this.fontSize.setAttribute('data-font-size', size);
  }

  getBodySize() {
    return parseInt(this.fontSize.getAttribute('data-font-size'));
  }

  setBodySize(size) {
    document.getElementsByTagName('body')[0].style.fontSize = size + '%';
  }

  observe() {
    if(this.fontSizeMore) {
      this.fontSizeMore.addEventListener('click', () => {
        this.increaseSize();
      });
    }

    if(this.fontSizeLess) {
      this.fontSizeLess.addEventListener('click', () => {
        this.decreaseSize();
      });
    }
  }

  init() {
    this.fontSize.setAttribute('data-font-size', 100);

    this.observe();
  }
}

window.onload = function () {
  new FontSize();

  clickMenu();
  toogleInvertColor();

  const timelineContainer = document.querySelector('[data-schedule]')
  const speakersContainer = document.querySelector('[data-speaker]')

  timelineContainer.innerHTML = timelineTemplate(timeline);
  speakersContainer.innerHTML = speakerTemplate(speakersData);
};
