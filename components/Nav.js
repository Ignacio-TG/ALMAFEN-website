import React from 'https://esm.sh/react@18.3.1';

export function Nav({ current, onChange, labName }) {
  const items = [
    { key: 'home', label: 'Home' },
    { key: 'team', label: 'Members' },
    { key: 'pubs', label: 'Publications' },
    { key: 'apply', label: 'Apply' }
  ];

  return React.createElement(
    'nav',
    { className: 'sticky top-0 z-50 bg-blue-500/90 backdrop-blur border-b' },
    React.createElement(
      'div',
      { className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16' },
      [
        React.createElement(
          'div',
          { className: 'flex items-center gap-3', key: 'left' },
          [
            React.createElement('div', { className: 'h-9 w-9 rounded-xl bg-blue-600', key: 'logo' }),
            React.createElement('span', { className: 'font-semibold text-white', key: 'name' }, labName)
          ]
        ),
        React.createElement(
          'div',
          { className: 'flex items-center gap-2', key: 'right' },
          items.map(it =>
            React.createElement(
              'button',
              {
                key: it.key,
                onClick: () => onChange(it.key),
              className:
                'px-3 py-2 rounded-lg text-sm font-medium transition transform focus:outline-none active:scale-95 ' +
                (current === it.key ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-600'),
              },
              it.label
            )
          )
        )
      ]
    )
  );
}
