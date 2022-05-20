import React from 'react';
import classNames from 'classnames';
import styles from './ContactOptions.module.scss';

/**
 * Contact Options component.
 *
 * @component
 * @return {React.ReactNode}
 */
const ContactOptions = () => (
  <section className={styles['container']}>
    <h2 className={styles['title']}>
      צרו איתי קשר
    </h2>

    <ul className={styles['options-list']}>
      <li>
        <a
          href="tel:+972549415451"
          target="_blank"
          rel="noreferrer"
          className={classNames(
            styles['option-container'],
            styles['option-container_reversed'],
          )}
        >
          <span
            className={classNames(
              styles['option-icon'],
              styles['option-icon_type_call'],
            )}
          />

          <span
            className={classNames(
              styles['option-label'],
              styles['option-label_reversed'],
            )}
          >
            התקשרו אלי

            <span className={styles['option-sub-label']}>
              054-941-5451
            </span>
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://wa.me/972549415451"
          target="_blank"
          rel="noreferrer"
          className={styles['option-container']}
        >
          <span
            className={classNames(
              styles['option-icon'],
              styles['option-icon_type_whatsapp'],
            )}
          />

          <span className={styles['option-label']}>
            ווצאפ

            <span className={styles['option-sub-label']}>
              054-941-5451
            </span>
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100072557702001"
          target="_blank"
          rel="noreferrer"
          className={classNames(
            styles['option-container'],
            styles['option-container_reversed'],
          )}
        >
          <span
            className={classNames(
              styles['option-icon'],
              styles['option-icon_type_facebook'],
            )}
          />

          <span
            className={classNames(
              styles['option-label'],
              styles['option-label_reversed'],
            )}
          >
            פייסבוק

            <span className={styles['option-sub-label']}>
              Avishag Twito
            </span>
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/shaga.photo/"
          target="_blank"
          rel="noreferrer"
          className={styles['option-container']}
        >
          <span
            className={classNames(
              styles['option-icon'],
              styles['option-icon_type_instagram'],
            )}
          />

          <span className={styles['option-label']}>
            אינסטגרם

            <span className={styles['option-sub-label']}>
              shaga.photo
            </span>
          </span>
        </a>
      </li>
    </ul>
  </section>
);

export default ContactOptions;
