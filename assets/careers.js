const filter = document.querySelector('#listing-filter');
const status = document.querySelector('#listing-status');
const listings = document.querySelector('#listings');
const categories = {
  project: 'Open Projects',
  technician: 'Technicians',
  subcontractor: 'Subcontractors'
};

function appendText(parent, tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  parent.append(element);
}

function makeListing(post) {
  const card = document.createElement('article');
  card.className = 'career-listing';
  appendText(card, 'p', categories[post.category], 'eyebrow');
  appendText(card, 'h2', post.title);
  appendText(card, 'p', [post.location, post.start && 'Start: ' + post.start].filter(Boolean).join(' · '));
  appendText(card, 'p', post.description);
  if (post.requirements) appendText(card, 'p', 'Requirements: ' + post.requirements);
  const apply = document.createElement('a');
  apply.className = 'btn dark';
  apply.textContent = post.category === 'technician' ? 'Apply by email' : 'Email about this opportunity';
  apply.href = 'mailto:info@yosroyalty.com?subject=' + encodeURIComponent('Careers inquiry: ' + post.title);
  card.append(apply);
  return card;
}

async function loadListings() {
  try {
    const response = await fetch('opportunities.json');
    if (!response.ok) throw new Error('Could not load opportunities');
    const posts = await response.json();
    const open = posts.filter(post => post && post.status === 'open' &&
      Object.hasOwn(categories, post.category) && post.title && post.description);
    function render() {
      const visible = open.filter(post => filter.value === 'all' || post.category === filter.value);
      listings.replaceChildren(...visible.map(makeListing));
      status.textContent = visible.length
        ? visible.length + (visible.length === 1 ? ' opportunity' : ' opportunities')
        : 'There are no open opportunities in this category right now.';
    }
    filter.addEventListener('change', render);
    render();
  } catch {
    status.textContent = 'Opportunities are temporarily unavailable. Please visit our Contact page to get in touch.';
  }
}

loadListings();
