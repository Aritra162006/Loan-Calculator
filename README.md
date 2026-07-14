# Loan Calculator

A professional, client-side financial planning tool designed to calculate monthly loan payments, total repayment amounts, and cumulative interest costs. The application features a clean, responsive user interface with synchronized slider and numeric inputs, multi-currency support, and real-time computation logic.

---

## 🚀 Live Demo & How to Run

This is a standalone, lightweight web application built using standard HTML5, CSS3, and Vanilla JavaScript. It requires no installation, server setup, or build processes.

### Running Locally
1. Clone or download this repository.
2. Open [index.html](index.html) directly in any modern web browser (Chrome, Safari, Firefox, Edge).

---

## 📁 File Structure

The project consists of three main files located in the root directory:

*   [index.html](index.html): Defines the semantic structure, inputs, and output containers.
*   [style.css](style.css): Houses all styling, visual themes, responsive rules, and interactive transitions.
*   [main.js](main.js): Implements the state management, sync mechanics, and mathematical loan calculations.

---

## ✨ Features

- **Synchronized Dual-Input Controls:** Adjust parameters seamlessly using either range sliders for quick estimation or numeric input boxes for exact values. Both elements update each other in real-time.
- **Multi-Currency Capability:** Instantly switch between four major global currencies:
  - Indian Rupees (`₹`)
  - US Dollars (`$`)
  - Euros (`€`)
  - British Pounds (`£`)
- **Interactive Metrics Dashboard:** Displays a breakdown of three essential financial metrics:
  - **Monthly Payment:** The estimated installment due each month.
  - **Total Amount:** The aggregate of principal and interest paid over the life of the loan.
  - **Interest Cost:** The total cost of borrowing (total amount minus the principal).
- **Responsive Web Design:** Fully optimized layout for desktops, tablets, and mobile screens. Features elegant scale-up micro-animations on interactive items (buttons and stats cards) for a modern, tactile feel.

---

## 🧮 Mathematical Amortization Formula

The core calculation logic is processed locally inside [main.js](main.js). The monthly payment is computed using the standard fixed-rate amortization formula:

$$M = P \frac{r(1 + r)^n}{(1 + r)^n - 1}$$

Where:
*   **$M$**: Monthly Payment
*   **$P$**: Loan Principal (Amount)
*   **$r$**: Monthly Interest Rate, calculated as $\frac{\text{Annual Interest Rate}}{12 \times 100}$
*   **$n$**: Total number of monthly installments, calculated as $\text{Term (Years)} \times 12$

### Total Repayment & Interest Cost
*   **Total Repayment Amount:** $T = M \times n$
*   **Total Interest Cost:** $I = T - P$

*Note: If the interest rate is set to $0\%$, the calculator automatically switches to a simple division fallback ($M = P / n$) to prevent division-by-zero math errors.*

---

## 🛠️ Code Overview

### State Management
A central `information` configuration object in [main.js](main.js) tracks the active currency, current loan values, interest rate, term, and calculation results:

```javascript
const information = {
    currency: '₹',
    rate: 1,
    term: 12,
    loan: 100000,
    monthly: '--',
    total: '--',
    interest: '--'
}
```

### Event Synchronization
Whenever a user interacts with a range slider or numeric field, event handler functions sync the values, update the state, and trigger recalculations:

```javascript
function updateLoan() {
    const loanInput = document.getElementById('loan-input');
    const loanRange = document.getElementById('loan-range');
    loanInput.value = loanRange.value;
    loanRange.value = loanInput.value;

    information.loan = loanInput.value;
    calculateLoan();
}
```
