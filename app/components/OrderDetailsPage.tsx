'use client';

import { useState } from 'react';
import styles from './OrderDetailsPage.module.css';

type OrderItem = {
  id: number;
  name: string;
  details: string;
  quantity: string;
  price: string;
  unitPrice: string;
  imageKind: 'case' | 'glass';
};

const EURO = '\u20AC';

const ORDER_ITEMS: OrderItem[] = [
  {
    id: 1,
    name: 'Silicone Case for iPhone 7',
    details: 'Product color: Midnight Blue, Turquoise Blue',
    quantity: 'Quantity: 2 items',
    price: `${EURO} 36.40`,
    unitPrice: `${EURO} 18.20 per item`,
    imageKind: 'case',
  },
  {
    id: 2,
    name: 'Tempered glass for Iphone',
    details: 'Size: Iphone 7, Iphone 8',
    quantity: 'Quantity: 4 items',
    price: `${EURO} 20.00`,
    unitPrice: `${EURO} 5.00 per item`,
    imageKind: 'glass',
  },
  {
    id: 3,
    name: 'Tempered glass for Iphone',
    details: 'Size: Iphone 7, Iphone 8',
    quantity: 'Quantity: 4 items',
    price: `${EURO} 20.00`,
    unitPrice: `${EURO} 5.00 per item`,
    imageKind: 'glass',
  },
];

const SUMMARY_LINES = [
  { label: 'Subtotal', value: `${EURO} 56.40` },
  { label: 'Delivery', value: 'FREE', isAccent: true },
  { label: 'Tax', value: `${EURO} 11.84` },
  { label: 'Insurance', value: `${EURO} 7.00` },
];

export default function OrderDetailsPage() {
  const [deliveryOpen, setDeliveryOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.topBar}>
            <button className={styles.topAction}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M9 8l-4 4l4 4" />
              </svg>
              <span>Go Back</span>
            </button>
            <h1 className={styles.logo}>
              <span className={styles.logoMain}>201</span><span className={styles.logoY}>Y</span>
            </h1>
            <button className={styles.menuButton} aria-label="Open menu">
              <span />
              <span />
            </button>
          </div>

          <div className={styles.stepper}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={`${styles.stepDot} ${styles.stepDone}`}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3.2 8.5L6.5 11.6L12.8 4.9" />
                  </svg>
                </span>
                <span className={styles.stepLabel}>Personal details</span>
                <span className={styles.stepLine} />
              </div>
              <div className={styles.step}>
                <span className={`${styles.stepDot} ${styles.stepCurrent}`}>2</span>
                <span className={styles.stepLabel}>Order details</span>
                <span className={styles.stepLine} />
              </div>
              <div className={styles.step}>
                <span className={styles.stepDot}>3</span>
                <span className={styles.stepLabel}>Payment</span>
                <span className={styles.stepLine} />
              </div>
              <div className={styles.step}>
                <span className={styles.stepDot}>4</span>
                <span className={styles.stepLabel}>Confirmation</span>
              </div>
            </div>
            <button className={styles.previousStep}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M9 8l-4 4l4 4" />
              </svg>
              <span>Previous step</span>
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={`${styles.container} ${styles.contentGrid}`}>
          <section className={styles.card}>
            <div className={styles.orderHeader}>
              <h2>Order items</h2>
              <button className={styles.editCart}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 16.5V19h2.5l9.2-9.2l-2.5-2.5L5 16.5z" />
                  <path d="M13.9 5.8L16.4 8.3" />
                </svg>
                <span>Edit shopping cart</span>
              </button>
            </div>

            <div className={styles.itemList}>
              {ORDER_ITEMS.map((item, itemIndex) => (
                <article
                  key={item.id}
                  className={`${styles.itemRow} ${itemIndex < ORDER_ITEMS.length - 1 ? styles.itemDivider : ''}`}
                >
                  <div className={styles.itemVisualWrap}>
                    <div
                      className={`${styles.itemVisual} ${
                        item.imageKind === 'case' ? styles.caseVisual : styles.glassVisual
                      }`}
                    />
                  </div>

                  <div className={styles.itemInfo}>
                    <h3>{item.name}</h3>
                    <p>{item.details}</p>
                    <p>{item.quantity}</p>
                  </div>

                  <div className={styles.itemPrice}>
                    <strong>{item.price}</strong>
                    <span>{item.unitPrice}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.discountBar}>
              <p>
                Have discount code? <button>Click to enter it.</button>
              </p>
            </div>
          </section>

          <aside className={styles.sideColumn}>
            <section className={styles.card}>
              <h2 className={styles.summaryTitle}>Summary</h2>
              <p className={styles.summaryDescription}>
                The total cost consist of the tax, insurance and the delivery charge.
              </p>

              <div className={styles.summaryList}>
                {SUMMARY_LINES.map((line, lineIndex) => (
                  <div
                    key={line.label}
                    className={`${styles.summaryRow} ${lineIndex < SUMMARY_LINES.length - 1 ? styles.summaryDivider : ''}`}
                  >
                    <span>{line.label}</span>
                    <strong className={line.isAccent ? styles.freeValue : ''}>{line.value}</strong>
                  </div>
                ))}
              </div>

              <div className={styles.totalRow}>
                <span>TOTAL:</span>
                <strong>{EURO} 75.24</strong>
              </div>
            </section>

            <section className={styles.card}>
              <button className={styles.deliveryToggle} onClick={() => setDeliveryOpen((prev) => !prev)}>
                <h3>Delivery</h3>
                <span className={styles.plusCircle}>{deliveryOpen ? '-' : '+'}</span>
              </button>
              {deliveryOpen && <p className={styles.deliveryText}>Standard shipping selected.</p>}
            </section>

            <button className={styles.nextButton}>Next step</button>
          </aside>
        </div>
      </main>

      <section className={styles.separator}>
        <div className={`${styles.container} ${styles.separatorLine}`} />
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.features}`}>
          <article className={styles.feature}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <h3>Your information is Safe</h3>
            <p>The total cost consist of the tax, insurance and the delivery charge.</p>
          </article>

          <article className={styles.feature}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s7-3.2 7-8.4V6.2L12 3L5 6.2v6.4C5 17.8 12 21 12 21z" />
              <path d="M9.2 12.3L11.2 14.2L14.9 10.5" />
            </svg>
            <h3>Secure checkout</h3>
            <p>The total cost consist of the tax, insurance and the delivery charge.</p>
          </article>

          <article className={styles.feature}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.5 12.5V9a7.5 7.5 0 0 1 15 0v3.5" />
              <path d="M4 12.5h4.2v6H4z" />
              <path d="M15.8 12.5H20v6h-4.2z" />
            </svg>
            <h3>24/7 Support</h3>
            <p>The total cost consist of the tax, insurance and the delivery charge.</p>
          </article>
        </div>
      </footer>
    </div>
  );
}
