import React from 'https://esm.sh/react@18.3.1';
import { HOME } from '../data/home.js';
import { SITE } from '../data/site.js';

function Hero() {
  return React.createElement(
    'section',
    { className: 'relative' },
    [
  React.createElement('img', { key: 'img', src: SITE.heroImage, alt: 'hero', className: 'h-72 w-full object-cover' }),
      React.createElement('div', { key: 'overlay', className: 'absolute inset-0 bg-gradient-to-t from-black/60 to-black/10' }),
      React.createElement(
        'div',
        { key: 'textwrap', className: 'absolute inset-0 flex items-end' },
        React.createElement(
          'div',
          { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8' },
          [
            React.createElement('h1', { key: 'h1', className: 'text-3xl sm:text-4xl font-bold text-white drop-shadow' }, SITE.labName),
            React.createElement('p', { key: 'p', className: 'text-white/90 mt-1' }, SITE.institution)
          ]
        )
      )
    ]
  );
}

export function Home() {
  return React.createElement(
    'main',
    null,
    [
      React.createElement(Hero, { key: 'hero' }),
      React.createElement(
        'section',
        { key: 'content', className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8' },
        [
          React.createElement(
            'div',
            { key: 'about', className: 'md:col-span-2' },
            [
              React.createElement('h2', { key: 'h2-qs', className: 'text-2xl font-semibold mb-3' }, 'About Us'),
              React.createElement('p', { key: 'p-qs', className: 'text-gray-700' }, SITE.shortAbout),
              React.createElement('h3', { key: 'h3-proy', className: 'text-xl font-semibold mt-6 mb-2' }, 'Projects Ongoing'),
              React.createElement('p', { key: 'p-proy', className: 'text-gray-700' }, SITE.projections)
            ]
          ),
          React.createElement(
            'aside',
            { key: 'aside', className: 'md:col-span-1' },
            [
                // Latest articles
                React.createElement('h2', { key: 'h2-latest', className: 'text-2xl font-semibold mb-3' }, 'Latest Articles'),
                React.createElement(
                'div',
                { key: 'cards', className: 'space-y-4 mb-6' },
                HOME.latestPapers.map((p, i) =>
                  React.createElement(
                  'a',
                  { key: i, href: p.url, target: '_blank', rel: 'noopener noreferrer', className: 'block group' },
                  React.createElement(
                    'div',
                    { className: 'rounded-2xl overflow-hidden shadow hover:shadow-md transition' },
                    [
                    React.createElement('img', { key: 'cov', src: p.cover, alt: p.title, className: 'h-32 w-full object-cover' }),
                    React.createElement(
                      'div',
                      { key: 'txt', className: 'p-3' },
                      [
                      React.createElement('div', { key: 't', className: 'font-medium group-hover:underline' }, p.title),
                      React.createElement('div', { key: 'v', className: 'text-xs text-gray-500 mt-1' }, p.venue)
                      ]
                    )
                    ]
                  )
                  )
                )
                ),

              // Noticias (nuevo)
              HOME.news && React.createElement('h3', { key: 'h2-news', className: 'text-2xl font-semibold mb-3 mt-4' }, 'Latest News'),
              HOME.news && React.createElement(
                'div',
                { key: 'news', className: 'space-y-3' },
                HOME.news.items.map((n, i) =>
                  React.createElement(
                    'a',
                    { key: i, href: n.url || '#', className: 'block p-3 rounded-lg bg-white border hover:shadow-sm' },
                    [
                      React.createElement('div', { key: 'nt', className: 'font-medium' }, n.title),
                      React.createElement('div', { key: 'nd', className: 'text-xs text-gray-500' }, n.date),
                      React.createElement('div', { key: 'ns', className: 'text-sm text-gray-700 mt-1' }, n.summary)
                    ]
                  )
                )
              )
            ]
          )
        ]
      )
    ]
  );
}
