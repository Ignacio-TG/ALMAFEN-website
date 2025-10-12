// Centralized data for easy editing
export const DATA = {
  site: {
    labName: 'ALMAFEN LAB',
    institution: 'Pontifical Catholic University of Chile',
    shortAbout: 'We develop machine learning methods to solve problems in cryogenic liquid storage, biopreservation, and sustainable cooling systems.',
    projections: '2-3 year plan: chemometric analysis, digital twins for cryogenic systems, and advanced process control for liquid storage.',
    email: 'applications@your-domain.tld',
    heroImage: './img/hero.jpg' // change to your local image or URL
  },
  latestPapers: [
    {
      title: 'A realistic vapour phase heat transfer model for the weathering of LNG stored in large tanks',
      cover: './img/paper3.jpg',
      venue: 'Energy (2019)',
      url: 'https://doi.org/10.1016/j.energy.2019.02.174'
    },
    {
      title: 'A realistic vapour phase heat transfer model for the weathering of LNG stored in large tanks',
      cover: './img/paper3.jpg',
      venue: 'Energy (2019)',
      url: 'https://doi.org/10.1016/j.energy.2019.02.174'
    },
  ],
  // Noticias / novedades del laboratorio (subtítulo + lista)
  news: {
    items: [
      {
        title: 'Seminario sobre quimiometría - Octubre 2025',
        date: '2025-10-15',
        summary: 'Charla abierta sobre técnicas quimiométricas aplicadas a espectroscopía.',
        url: '#'
      },
      {
        title: 'Beca de investigación disponible',
        date: '2025-09-30',
        summary: 'Se abre concurso para M.Sc. con financiamiento parcial. Plazo: 30 nov.',
        url: '#'
      }
    ]
  },
  members: {
    pis: [
      {
        name: 'Felipe Huerta',
        photo: './img/pi-felipe.jpg',
        program: 'Principal Investigator',
        entryYear: 2021,
        status: 'Active',
        thesis: '—'
      }
    ],
    postdocs: [
      {
        name: 'Laura Sánchez',
        photo: './img/postdoc-laura.jpg',
        program: 'Postdoctoral Associate',
        entryYear: 2024,
        status: 'Active',
        thesis: 'Chemometric modeling of cryogenic liquid systems'
      },
      {
        name: 'Andrés Castillo',
        photo: './img/postdoc-andres.jpg',
        program: 'Postdoctoral Associate',
        entryYear: 2025,
        status: 'Active',
        thesis: 'Digital twins and predictive control in cryogenic storage'
      }
    ],
    phd: [
      {
        name: 'María Pérez',
        photo: './img/phd-maria.jpg',
        program: 'Ph.D. in Chemical Engineering',
        entryYear: 2024,
        status: 'In progress',
        thesis: 'Spectral models for cryogenic liquid quality prediction'
      },
      {
        name: 'Diego Araya',
        photo: './img/phd-diego.jpg',
        program: 'Ph.D. in Engineering Sciences',
        entryYear: 2025,
        status: 'In progress',
        thesis: 'Active learning and Bayesian optimization for cryogenic system monitoring'
      }
    ],
    masters: [
      {
        name: 'Juan Rodríguez',
        photo: './img/msc-juan.jpg',
        program: 'M.Sc. in Engineering Sciences',
        entryYear: 2025,
        status: 'In progress',
        thesis: 'Digital twins for liquid helium storage systems'
      },
      {
        name: 'Camila Ríos',
        photo: './img/msc-camila.jpg',
        program: 'M.Sc. in Thermal Engineering',
        entryYear: 2024,
        status: 'In progress',
        thesis: 'Supervised dimensionality reduction in cryogenic spectroscopy'
      }
    ],
    alumni: [
      { text: 'Vincenzo Cotroneo Figueroa (Graduate, M.Sc @ UC) → Senior Cryogenic Systems Engineer @ Air Liquide' },
    ]
  },
  publications: [
    {
      title: 'A realistic vapour phase heat transfer model for the weathering of LNG stored in large tanks',
      authors: 'Huerta F., Vesovic V.',
      year: 2019, 
      journal: 'Energy',
      doi: '10.1016/j.energy.2019.02.174',
      url: 'https://doi.org/10.1016/j.energy.2019.02.174'
    },
    {
      title: 'CFD modelling of the isobaric evaporation of cryogenic liquids in storage tanks',
      authors: 'Huerta F., Vesovic V.',
      year: 2021,
      journal: 'International Journal of Heat and Mass Transfer',
      doi: '10.1016/j.ijheatmasstransfer.2021.121419',
      url: 'https://doi.org/10.1016/j.ijheatmasstransfer.2021.121419'
    },
    {
      title: 'Analytical solutions for the isobaric evaporation of pure cryogens in storage tanks',
      authors: 'Huerta F., Vesovic V.', 
      year: 2019,
      journal: 'International Journal of Heat and Mass Transfer',
      doi: '10.1016/j.ijheatmasstransfer.2019.118536',
      url: 'https://doi.org/10.1016/j.ijheatmasstransfer.2019.118536'
    },
    {
      title: 'Optimizing ethanol recovery in a spinning cone column',
      authors: 'Huerta F., Pérez-Correa JR.',     
      year: 2018,
      journal: 'Journal of the Taiwan Institute of Chemical Engineers',
      doi: '10.1016/j.jtice.2017.11.030',
      url: 'https://doi.org/10.1016/j.jtice.2017.11.030'
    },
        {
      title: 'CFD modelling of the non-isobaric evaporation of cryogenic liquids in storage tanks',
      authors: 'Huerta F., Vesovic V.',     
      year: 2024,
      journal: 'Applied Energy',
      doi: '10.1016/j.apenergy.2023.122420',
      url: 'https://doi.org/10.1016/j.apenergy.2023.122420'
    },
    {
      title: 'CryoEvap: An open-source software to simulate the evaporation of cryogenic liquids in vertically orientated storage tanks',
      authors: 'Huerta F., Vesovic V.',     
      year: 2025,
      journal: 'SoftwareX',
      doi: '10.1016/j.softx.2025.102099',
      url: 'https://doi.org/10.1016/j.softx.2025.1020996'
    },
    {
      title: 'The effect of varying ambient temperature on the boil-off gas rates during the isobaric storage of liquid ammonia',
      authors: 'Yu M., Tapia I., Huerta F., Vesovic V.',   
      year: 2025,
      journal: 'SSRN',
      doi: 'Under Review',
      url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5555353'
    },
    {
      title: 'A 1-D Model for the Non-Isobaric Evaporation of Cryogenic Liquids in Storage Tanks',
      authors: 'Huerta F., Tapia I., Vesovic V.',    
      year: 2025,
      journal: 'Energy Storage',
      doi: '10.1016/j.est.2025.117913',
      url: 'https://doi.org/10.1016/j.est.2025.117913'
    },
    {
      title: 'Analytical solutions for the isobaric evaporation of pure cryogens in storage tanks',
      authors: 'Huerta F., Vesovic V.',
      year: 2019,
      journal: 'International Journal of Heat and Mass Transfer',
      doi: '10.1016/j.ijheatmasstransfer.2019.118536',
      url: 'https://doi.org/10.1016/j.ijheatmasstransfer.2019.118536'
    },

  ]
};
