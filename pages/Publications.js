import React, { useMemo } from 'https://esm.sh/react@18.3.1';
import { PUBLICATIONS } from '../data/publications.js';

export function Publications() {
  const pubs = useMemo(() => [...PUBLICATIONS.publications].sort((a, b) => b.year - a.year), []);
  return React.createElement(
    'main',
    { className: 'mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-6 text-center' }, 'Publications'),
      React.createElement(
        'ul',
        { key: 'ul', className: 'space-y-5' },
        pubs.map((p, i) =>
          React.createElement(
            'li',
            { key: i, className: 'bg-white border rounded-2xl p-5 shadow-sm' },
            [
              React.createElement('div', { key: 't', className: 'font-medium text-lg' }, p.title),
              React.createElement('div', { key: 'm', className: 'text-sm text-gray-700 mt-1' }, `${p.authors} · ${p.journal} · ${p.year}`),
              React.createElement(
                'div',
                { key: 'l', className: 'mt-2' },
                React.createElement('a', { href: p.url, target: '_blank', rel: 'noopener noreferrer', className: 'text-blue-500 hover:underline' }, `DOI: ${p.doi}`)
              )
            ]
          )
        )
      )
    ]
  );
}
