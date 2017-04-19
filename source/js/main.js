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
    role: 'Desenvolvedor na RedVentures',
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
    role: 'Desenvolvedor Front-End na Cisco em Orlando/FL (USA) e organizador do OrlandoJS Meetup',
    label: '@bfgenaro',
    link: 'http://twitter.com/bfgenaro',
    photo: 'assets/images/bruno-genaro-frontinsampa.jpg'
  },
  {
    name: 'Hugo Bessa',
    role: 'Desenvolvedor front-end com foco em simplicidade.',
    label: '@hugoBessaa',
    link: 'http://twitter.com/hugoBessaa',
    photo: 'assets/images/hugo-bessa-frontinsampa.jpg'
  },
  {
    name: 'Reinaldo Ferraz',
    role: 'Especialista em Desenvolvimento Web do W3C Brasil e Ceweb.br',
    label: '@reinaldoferraz',
    link: 'http://twitter.com/reinaldoferraz',
    photo: 'assets/images/reinaldo-ferraz-frontinsampa.jpg'
  },
  {
    name: 'Zeh Fernandes',
    role: 'Designing with algorithms. In a quest to create one thing that is great',
    label: '@zehf',
    link: 'http://twitter.com/zehf',
    photo: 'assets/images/zeh-fernandes-frontinsampa.jpg'
  },
  {
    name: 'Jean Carlo Emer',
    role: 'Web craftsman and magician of computer machines. Developer at Work.co',
    label: '@jcemer',
    link: 'http://twitter.com/jcemer',
    photo: 'assets/images/jean-carlo-emer-frontinsampa.jpg'
  }
]

var timeline = [
  {
    hour: '08:00 - 09:20',
    title: 'Credenciamento',
    description: 'Não esqueça seu RG',
    speaker: '',
    link: ''
  },
  {
    hour: '9:20 - 9:30',
    title: 'Apresentação',
    description: '',
    speaker: 'Matheus Marsiglio',
    link: ''
  },
  {
    hour: '9:30 - 10:10',
    title: 'CSS Tips',
    description: 'Muitos de nós já perdemos a paciência com CSS pelo menos uma vez na vida. No entanto, já também demos aquele suspiro de alívio quando conseguimos resolver um determinado problema ou bug. Fácil de aprender e difícil de dominar, o CSS é uma linguagem de fácil acesso e que esconde diversos segredos. Nessa talk, iremos abordar algumas dicas de alguém que já perdeu a paciência algumas vezes com CSS mas que ainda o ama. Sem ressentimentos.',
    speaker: 'Raphael Fabeni',
    link: ''
  },
  {
    hour: '10:20 - 11:00',
    title: 'Webapps confiáveis com Elm',
    description: 'Interfaces de usuário podem ser simples e confiáveis utilizando a ferramenta correta. Elm ajuda a impedir erros de execução e torna o processo de desenvolvimento mais simples. A simplicidade do Elm o ajuda a criar webapps à prova de balas e torna seu processo de desenvolvimento muito mais divertido.',
    speaker: 'Hugo Bessa',
    link: ''
  },
  {
    hour: '11:10 - 12:00',
    title: ' UX: quem são, o que fazem, onde vivem?',
    description: '"Fazer UX" está virando pré-requisito para desenvolver qualquer produto digital, mas o que está por trás disso? O que o mercado espera que a gente faça, como os chefes vendem o que a gente faz, o que os devs acham que a gente faz e o que a gente realmente faz (ou deveria fazer).',
    speaker: 'Bianca Brancaleone',
    link: ''
  },
  {
    hour: '12:05 - 12:30',
    title: 'WCAG 2.1',
    description: 'Nesta palestra serão apresentadas as primeiras atualizações da nova versão das Diretrizes de Acessibilidade para Conteúdo Web, as WCAG, e como elas podem impactar a acessibilidade nas páginas Web. Serão mostradas as principais mudanças propostas nesse primeiro Draft e como isso pode refletir no desenvolvimento front-end.',
    speaker: 'Reinaldo Ferraz',
    link: ''
  },
  {
    hour: '12:30 - 14:00',
    title: 'Almoço',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '14:10 - 14:50',
    title: 'Síndrome do impostor, um mal que nunca sai de moda',
    description: 'Você já teve a sensação que não é bom o suficiente para fazer o seu trabalho? Você já fingiu entender algo, mesmo sem entender nada? Você já teve medo de alguém descobrir que você é uma fraude? Que o código ou trabalho dos seus amigos é mais rápido ou melhor? Que você programa orientado ao Google? Então, talvez seja a hora de você entender melhor do que isso se trata e como vencer esse sentimento.',
    speaker: 'Patricia Silva',
    link: ''
  },
  {
    hour: '15:00 - 15:40',
    title: 'Renderizando componentes React no servidor',
    description: 'O ReactJS tem a poderosa habilidade de renderizar seus componentes no servidor. Nesta apresentação Bruno irá mostrar os benefícios e também como e quando podemos explorar esta prática.',
    speaker: 'Bruno Genaro',
    link: ''
  },
  {
    hour: '15:50 - 16:10',
    title: 'Built for destruction: Preparando sua arquitetura de componentes para o refactor',
    description: 'Lições aprendidas ao criar um sistema de design auto documentável e de fácil refactor utilizando Functional CSS + React.',
    speaker: 'Zéh Fernandes',
    link: ''
  },
  {
    hour: '16:20 - 16:50',
    title: 'What I learned interviewing for Front-end Developer roles ',
    description: 'Linguagem JavaScript. Desafios de código. Complexidade de algoritmos. CSS. Web APIs. React. E mais. Os aprendizados obtidos nos processos de entrevista para grandes nomes da tecnologia. Tudo isto contado de forma divertida (deixando de lado algumas frustrações). ',
    speaker: 'Jean Carlo Emmer',
    link: ''
  },
  {
    hour: '17:00 - 17:30',
    title: 'Coffee Break',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '17:30 - 18:20',
    title: 'Vue.js, Vuex, Single Source of Truth e aplicações reais',
    description: 'O segredo para Single Page Applications bem sucedidas: o controle total sobre a informação carregada em memória. Esta palestra falará sobre gerenciamento centralizado do estado da aplicação.',
    speaker: 'Fábio Vedoveli',
    link: ''
  },
  {
    hour: '18:30',
    title: 'Encerramento',
    description: '',
    speaker: '',
    link: ''
  },
  {
    hour: '19:00',
    title: 'Party - Code In The Dark',
    description: '',
    speaker: '',
    link: ''
  }
]

const timelineTemplate = (timeline) => {
  return timeline.map((item, i) => {
    return (
      `
        <div class="timeline-block ${ i == 0 ? 'current' : '' }" data-timeline-bullet>
          <div class="timeline-content">
            <h3 class="text-medium">${ item.title }</h3>
            <p>${ item.hour }</p>
            <p>${ item.description }</p>
            <p class="timeline-speaker">${ item.speaker }</p>
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

class Timeline {
  constructor() {
    this.timeline = document.querySelector('[data-timeline]');
    this.timelineBullet = this.timeline.querySelectorAll('[data-timeline-bullet]');

    this.init();
  }

  toggleBullet(bullet, bulletOrder) {
    var bulletPosY = bullet.getBoundingClientRect().top;

    if(bulletPosY <= (window.outerHeight / 2)) {
      bullet.classList.add('current');
      return;
    }

    if(bulletOrder === 0) {
      return;
    }

    bullet.classList.remove('current');
  }

  observe() {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('[data-timeline-bullet]').forEach(function(bullet, bulletOrder) {
        this.toggleBullet(bullet, bulletOrder);
      }.bind(this));
    });
  }

  init() {
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

  new Timeline();
};
