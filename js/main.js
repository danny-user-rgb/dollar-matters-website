/* Dollar Matters — Main JS */

// ---- Alpha grid ----
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildAlphaGrid(containerId, page) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  LETTERS.concat(['#']).forEach(letter => {
    const btn = document.createElement('a');
    btn.className = 'alpha-btn';
    btn.textContent = letter;
    btn.href = page
      ? `glossary.html#letter-${letter}`
      : `glossary.html#letter-${letter}`;
    grid.appendChild(btn);
  });
}
buildAlphaGrid('alpha-grid', false);
buildAlphaGrid('alpha-grid-page', true);

// ---- Glossary search ----
const TERMS = [
  { term: 'Annual Percentage Rate (APR)', def: 'The yearly interest rate charged on borrowed money, including fees.', letter: 'A' },
  { term: 'Annual Percentage Yield (APY)', def: 'The real rate of return on a savings account, factoring in compound interest.', letter: 'A' },
  { term: 'Asset', def: 'Anything you own that has monetary value — cash, property, investments.', letter: 'A' },
  { term: 'Amortization', def: 'The process of paying off a loan through regular scheduled payments over time.', letter: 'A' },
  { term: 'Budget', def: 'A plan for how you will spend and save your money each month.', letter: 'B' },
  { term: 'Balance', def: 'The amount of money in a bank account or owed on a credit card.', letter: 'B' },
  { term: 'Bankruptcy', def: 'A legal process that helps people who cannot repay debts get relief from some or all of what they owe.', letter: 'B' },
  { term: 'Bond', def: 'A loan you give to a government or company in exchange for interest payments.', letter: 'B' },
  { term: 'Compound Interest', def: 'Interest calculated on both the initial principal and the accumulated interest — making your money grow faster over time.', letter: 'C' },
  { term: 'Credit', def: 'The ability to borrow money with the agreement to pay it back later.', letter: 'C' },
  { term: 'Credit Score', def: 'A number (300–850) that represents how likely you are to repay debts. Higher is better.', letter: 'C' },
  { term: 'Credit Report', def: 'A detailed record of your credit history, including loans, credit cards, and payment history.', letter: 'C' },
  { term: 'Credit Union', def: 'A member-owned financial cooperative that offers banking services, often with lower fees than traditional banks.', letter: 'C' },
  { term: 'Collateral', def: 'An asset pledged as security for a loan. If you default, the lender can take the collateral.', letter: 'C' },
  { term: 'Default', def: 'Failure to repay a loan as agreed. Can severely damage your credit score.', letter: 'D' },
  { term: 'Debt', def: 'Money owed to another person or institution.', letter: 'D' },
  { term: 'Deductible', def: 'The amount you pay out-of-pocket before insurance kicks in.', letter: 'D' },
  { term: 'Direct Deposit', def: 'Electronic transfer of your paycheck directly into your bank account.', letter: 'D' },
  { term: 'Diversification', def: 'Spreading investments across different assets to reduce risk.', letter: 'D' },
  { term: 'Emergency Fund', def: 'Savings set aside specifically for unexpected expenses, typically 3–6 months of living costs.', letter: 'E' },
  { term: 'Equity', def: 'The value of an asset minus any debts owed against it. In a home, it\'s your ownership stake.', letter: 'E' },
  { term: 'FDIC', def: 'Federal Deposit Insurance Corporation — insures bank deposits up to $250,000 per depositor.', letter: 'F' },
  { term: 'FICO Score', def: 'The most widely used credit scoring model, ranging from 300 to 850.', letter: 'F' },
  { term: 'Fixed Rate', def: 'An interest rate that stays the same for the life of a loan.', letter: 'F' },
  { term: 'Foreclosure', def: 'The legal process by which a lender takes ownership of a property when the borrower fails to make mortgage payments.', letter: 'F' },
  { term: 'Gross Income', def: 'Your total earnings before any taxes or deductions are taken out.', letter: 'G' },
  { term: 'High-Yield Savings Account', def: 'A savings account that offers a higher interest rate than a traditional savings account.', letter: 'H' },
  { term: 'Income', def: 'Money received in exchange for work, investments, or other sources.', letter: 'I' },
  { term: 'Inflation', def: 'The rate at which the general level of prices rises, reducing purchasing power over time.', letter: 'I' },
  { term: 'Interest', def: 'The cost of borrowing money, or the reward for saving it, expressed as a percentage.', letter: 'I' },
  { term: 'IRA (Individual Retirement Account)', def: 'A tax-advantaged account designed to help you save for retirement.', letter: 'I' },
  { term: 'Liability', def: 'A debt or financial obligation you owe to someone else.', letter: 'L' },
  { term: 'Liquidity', def: 'How easily an asset can be converted to cash without losing value.', letter: 'L' },
  { term: 'Minimum Payment', def: 'The smallest amount you can pay on a credit card bill to keep the account in good standing.', letter: 'M' },
  { term: 'Mortgage', def: 'A loan used to purchase real estate, where the property itself serves as collateral.', letter: 'M' },
  { term: 'Mutual Fund', def: 'An investment vehicle that pools money from many investors to buy a diversified portfolio of stocks or bonds.', letter: 'M' },
  { term: 'Net Income', def: 'Your take-home pay after taxes and other deductions have been subtracted.', letter: 'N' },
  { term: 'Net Worth', def: 'The total value of everything you own minus everything you owe.', letter: 'N' },
  { term: 'Overdraft', def: 'When you spend more money than you have in your account, resulting in a negative balance and often a fee.', letter: 'O' },
  { term: 'Payday Loan', def: 'A short-term, high-interest loan typically due on your next payday. Often predatory — APRs can exceed 400%.', letter: 'P' },
  { term: 'Principal', def: 'The original amount of money borrowed or invested, before interest.', letter: 'P' },
  { term: 'Predatory Lending', def: 'Unfair or deceptive loan practices that target vulnerable borrowers with excessive fees and impossible terms.', letter: 'P' },
  { term: 'Roth IRA', def: 'A retirement account funded with after-tax money; qualified withdrawals in retirement are tax-free.', letter: 'R' },
  { term: 'Saving', def: 'Setting aside a portion of income regularly for future use or emergencies.', letter: 'S' },
  { term: 'Simple Interest', def: 'Interest calculated only on the original principal, not on accumulated interest.', letter: 'S' },
  { term: 'Student Loan', def: 'Money borrowed to pay for higher education that must be repaid with interest after graduation.', letter: 'S' },
  { term: 'Stock', def: 'A share of ownership in a company. Stockholders may earn dividends and benefit if the company grows.', letter: 'S' },
  { term: 'Tax Bracket', def: 'Income ranges that determine what percentage of your income you pay in federal taxes.', letter: 'T' },
  { term: 'Tax Deduction', def: 'An expense you can subtract from your taxable income, reducing the amount of taxes you owe.', letter: 'T' },
  { term: 'W-2', def: 'A tax form employers send showing your total wages and taxes withheld for the year.', letter: 'W' },
  { term: 'W-4', def: 'A form you fill out for your employer to tell them how much tax to withhold from each paycheck.', letter: 'W' },
  { term: 'Yield', def: 'The earnings generated on an investment, expressed as a percentage of the investment\'s cost.', letter: 'Y' },
];

// Search on index page
const searchInput = document.getElementById('glossary-search');
const searchSuggestions = document.getElementById('search-suggestions');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) {
      searchSuggestions.innerHTML = '';
      searchSuggestions.classList.remove('active');
      return;
    }
    const matches = TERMS.filter(t => t.term.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) {
      searchSuggestions.innerHTML = '<div class="suggestion-item" style="color:#9aa5b4">No results found</div>';
    } else {
      searchSuggestions.innerHTML = matches.map(m => {
        const highlighted = m.term.replace(new RegExp(`(${q})`, 'gi'), '<strong>$1</strong>');
        return `<a class="suggestion-item" href="glossary.html#letter-${m.letter}">${highlighted}</a>`;
      }).join('');
    }
    searchSuggestions.classList.add('active');
  });

  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.remove('active');
    }
  });
}

// ---- Header search overlay ----
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchOverlayClose = document.getElementById('search-overlay-close');
const searchOverlayInput = document.getElementById('search-overlay-input');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) searchOverlayInput.focus();
  });
}
if (searchOverlayClose) {
  searchOverlayClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
}

// ---- Mobile hamburger ----
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// ---- Dropdown keyboard ----
document.querySelectorAll('.has-dropdown').forEach(item => {
  const btn = item.querySelector('.nav-link');
  if (btn) {
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('force-open');
      document.querySelectorAll('.has-dropdown.force-open').forEach(el => el.classList.remove('force-open'));
      if (!isOpen) item.classList.add('force-open');
    });
  }
});
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.force-open').forEach(el => el.classList.remove('force-open'));
  }
});

// ---- Newsletter form ----
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const input = form.querySelector('input');
  const btn = form.querySelector('button');
  btn.textContent = 'Subscribed!';
  btn.style.background = 'rgba(255,255,255,0.35)';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
  }, 3000);
}

// ---- Glossary page: build terms ----
function buildGlossaryPage() {
  const container = document.getElementById('glossary-terms-container');
  if (!container) return;

  const grouped = {};
  TERMS.forEach(t => {
    if (!grouped[t.letter]) grouped[t.letter] = [];
    grouped[t.letter].push(t);
  });

  const sortedLetters = Object.keys(grouped).sort();
  sortedLetters.forEach(letter => {
    const section = document.createElement('div');
    section.className = 'glossary-letter-section';
    section.id = `letter-${letter}`;

    const heading = document.createElement('div');
    heading.className = 'glossary-letter-heading';
    heading.textContent = letter;
    section.appendChild(heading);

    grouped[letter].forEach(item => {
      const termEl = document.createElement('div');
      termEl.className = 'glossary-term';
      termEl.innerHTML = `
        <div class="glossary-term-name">${item.term}</div>
        <div class="glossary-term-def">${item.def}</div>
      `;
      section.appendChild(termEl);
    });

    container.appendChild(section);
  });
}
buildGlossaryPage();

// ---- Glossary page search ----
const glossaryPageSearch = document.getElementById('glossary-page-search');
if (glossaryPageSearch) {
  glossaryPageSearch.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    document.querySelectorAll('.glossary-term').forEach(termEl => {
      const name = termEl.querySelector('.glossary-term-name').textContent.toLowerCase();
      const def = termEl.querySelector('.glossary-term-def').textContent.toLowerCase();
      termEl.style.display = (!q || name.includes(q) || def.includes(q)) ? '' : 'none';
    });
    document.querySelectorAll('.glossary-letter-section').forEach(section => {
      const visible = [...section.querySelectorAll('.glossary-term')].some(t => t.style.display !== 'none');
      section.style.display = visible ? '' : 'none';
    });
  });
}
