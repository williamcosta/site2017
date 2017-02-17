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
  return speaker.map((item, index) => {
    return (
      `
        <figure class="speaker-item">
          <img src="assets/images/speaker.jpg" alt="">
          <figcaption>
            <p>${ speaker.name }</p>
            <p>
              Typographer & Illustrator
              <a href="${ speaker.twitterLink }" target="_blank">${ speaker.twitter }</a>
            </p>
          </figcaption>
        </figure>
      `
    )
  }).join('')
}

window.onload = function () {
  const timelineContainer = document.querySelector('[data-schedule]')
  const speakersContainer = document.querySelector('[data-speaker]')
  timelineContainer.innerHTML = timelineTemplate(timeline);
  speakersContainer.innerHTML = speakerTemplate(speakersData);
};
