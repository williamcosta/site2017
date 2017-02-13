'use strict';

var speakersData = [
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
    photo: 'assets/images/speaker.jpg'
  },
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische',
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
  return timeline.map((item, index) => {
    return (
      `
        <div class="timeline-block">
          <div class="timeline-circle"></div>
          <div class="timeline-content">
            <p class="timeline-date">${ item.hour }</p>
            <h2>${ item.title }</h2>
            <p>${ item.description }</p>
            <p class="timeline-speaker">${ item.speaker }</p>
            <a href="#" class="more-details">+ detalhes</a>
          </div>
        </div>
      `
    )
  }).join('')
}

const speakerTemplate = (speaker) => {
  return speaker.map((item, index) => {
    return (
      `
        <figure class="speaker-item">
          <img src="assets/images/speaker.jpg" alt="">
          <figcaption>
            <span class="name">${ speaker.name }</span>
            <p class="bio">Typographer & Illustrator</p>
            <a href="${ speaker.twitterLink }" class="social" target="_blank">${ speaker.twitter }</a>
          </figcaption>
        </figure>
      `
    )
  })
}

window.onload = function () {
  const timelineContainer = document.querySelector('.schedule-timeline')
  const speakersContainer = document.querySelector('.speakerContainer')
  timelineContainer.innerHTML = timelineTemplate(timeline);
  speakersContainer.innerHTML = speakerTemplate(speakersData);
};
