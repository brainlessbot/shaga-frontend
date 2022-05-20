import React from 'react';
import styles from './About.module.scss';
import personalPhoto from '../../images/personal-photo.jpg';

/**
 * About component.
 *
 * @component
 * @return {React.ReactNode}
 */
const About = () => (
  <section className={styles['container']}>
    <div className={styles['content']}>
      <h2 className={styles['title']}>
        אודותי
      </h2>

      <p className={styles['paragraph']}>
        היי! 👋 אני אבישג, צלמת משפחה, ילדים וקונספט. אני נשואה לאסף ויש לי ארבעה ילדים.
      </p>

      <p className={styles['paragraph']}>
        כל חיי תמיד סבבו סביב אומנות. למדתי הרבה מקצועות שונים: ציור, פיסול, גרפיקה, איפור, משחק,
        {' '}
        ואפילו עיצוב אופנה. אבל אף אחד מאלו לא באמת הצליח לרצות אותי.
      </p>

      <p className={styles['paragraph']}>
        הצילום היה תמיד חלק מחיי. אהבתי לצלם והייתי מקדישה לזה זמן רב בתור תחביב, אך מעולם לא עלה
        {' '}
        על דעתי לעסוק בזה בתור מקצוע. זה השתנה לפני מספר שנים, כאשר נחשפתי לתמונות אומנותיות של
        {' '}
        צלמת מוכשרת אחרת והתאהבתי במקום. באותו הרגע הבנתי שצילום הוא הדבר שאני רוצה לעסוק בו.
      </p>

      <p className={styles['paragraph']}>
        מאז שהתחלתי לצלם בשנת 2019 גיליתי עולם חדש שבו אפשר לתעד רגעים קסומים של המשפחה והילדים
        {' '}
        שלנו, שאין יקר מהם. אני מזמינה אתכם לחוויה משפחתית מהנה שתישאר אתכם לכל החיים!️
      </p>

      <p className={styles['paragraph']}>
        ממתינה לשמוע מכם. שלכם, אבישג ❤️
      </p>
    </div>

    <img src={personalPhoto} alt="אבישג טויטו" className={styles['image']} />
  </section>
);

export default About;
