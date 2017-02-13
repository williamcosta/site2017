'use strict';

var speakersData = [
  {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
  },
    {
    name: 'Jessica Hische',
    role: 'Typographer & Illustrator',
    twitter: 'jscahische',
    twitterLink: '/jscahische'
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

window.onload = function () {
  var timelineContainer = document.querySelector('.schedule-timeline')
  timelineContainer.innerHTML = timelineTemplate(timeline);
};
