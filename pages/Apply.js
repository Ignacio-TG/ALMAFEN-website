import React from 'https://esm.sh/react@18.3.1';
import { APPLY } from '../data/apply.js';

export function Apply() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Send form data to Formspree (assume endpoint is correctly configured)
    const formData = new FormData(form);
    (async () => {
      try {
        const res = await fetch(APPLY.endpoint, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });
        if (res.ok) {
          alert('Thank you — your application has been sent successfully.');
          form.reset();
        } else {
          let msg = res.statusText || 'Submission failed';
          try {
            const data = await res.json();
            if (data.error) msg = data.error;
          } catch (err) {
            // ignore
          }
          alert('Error sending the application: ' + msg);
        }
      } catch (err) {
        alert('Network error while sending the application: ' + err.message);
      }
    })();
  };

  return React.createElement(
    'main',
    { className: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10' },
    [
      React.createElement('h2', { key: 'h2', className: 'text-3xl font-bold mb-2' }, 'MSc/PhD Applications'),
      React.createElement('p', { key: 'p', className: 'text-gray-700 mb-6' }, 'Complete the form to apply to the laboratory. Attach links to CV. Your application will be sent by email to the team.'),
      React.createElement(
        'form',
        { key: 'f', onSubmit: handleSubmit, className: 'space-y-4 bg-white border rounded-2xl p-6 shadow-sm' },
        [ 
          React.createElement('div', { key: 'n' }, [
            React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Full name'),
            React.createElement('input', { name: 'name', required: true, className: 'w-full rounded-lg border px-3 py-2' })
          ]),
          React.createElement('div', { key: 'grid1', className: 'grid sm:grid-cols-2 gap-4' }, [
            React.createElement('div', { key: 'e' }, [
              React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Email'),
              React.createElement('input', { type: 'email', name: 'email', required: true, className: 'w-full rounded-lg border px-3 py-2' })
            ]),
            React.createElement('div', { key: 'prog' }, [
              React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Program applying to'),
              React.createElement('select', { name: 'program', required: true, className: 'w-full rounded-lg border px-3 py-2 bg-white' }, [
                React.createElement('option', { key: 'sel', value: '' }, 'Select'),
                React.createElement('option', { key: 'msc', value: 'MSc' }, 'M.Sc.'),
                React.createElement('option', { key: 'phd', value: 'PhD' }, 'Ph.D.')
              ])
            ])
          ]),
          React.createElement('div', { key: 'grid2', className: 'grid sm:grid-cols-2 gap-4' }, [
            React.createElement('div', { key: 'ub' }, [
              React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Country/city of residence'),
              React.createElement('input', { name: 'from', className: 'w-full rounded-lg border px-3 py-2' })
            ]),
            React.createElement('div', { key: 'disp' }, [
              React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Availability (month/year)'),
              React.createElement('input', { name: 'availability', className: 'w-full rounded-lg border px-3 py-2' })
            ])
          ]),
          React.createElement('div', { key: 'int' }, [
            React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Interests/Research areas'),
            React.createElement('textarea', { name: 'interests', rows: 4, className: 'w-full rounded-lg border px-3 py-2' })
          ]),
          React.createElement('div', { key: 'link' }, [
            React.createElement('label', { className: 'block text-sm font-medium mb-1' }, 'Links (CV, GitHub, Google Scholar, etc.)'),
            React.createElement('input', { name: 'links', placeholder: 'https://...', className: 'w-full rounded-lg border px-3 py-2' })
          ]),
          React.createElement('div', { key: 'foot', className: 'flex items-center justify-between' }, [
            React.createElement('p', { key: 'note', className: 'text-xs text-gray-500' }, `Responses will be sent to: ${APPLY.contactEmail}`),
            React.createElement('button', { key: 'btn', type: 'submit', className: 'rounded-xl bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700' }, 'Send Application')
          ])
        ]
      )
    ]
  );
}
 
