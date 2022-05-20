import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import classNames from 'classnames';
import styles from './ContactForm.module.scss';
import Button from '../common/Button';
import { Device } from '../../common/types';
import DeviceContext from '../../contexts/DeviceContext';
import api from '../../utils/api';

const { REACT_APP_RECAPTCHA_KEY = '' } = process.env;

type ContactFormResponseState = {
  isSuccessful: boolean,
  message: string | undefined,
};

/**
 * Contact Form component.
 *
 * @component
 * @return {React.ReactNode}
 */
const ContactForm = () => {
  const id = React.useId();

  const deviceType = React.useContext(DeviceContext);

  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const [
    lastResponse,
    setLastResponse,
  ] = React.useState<ContactFormResponseState | undefined>(undefined);
  const [isResponseVisible, setIsResponseVisible] = React.useState<boolean>(false);

  /**
   * Close the server response message.
   *
   * @return {void}
   */
  const closeResponse = (): void => setIsResponseVisible(false);

  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          content: '',
          recaptchaToken: '',
        }}
        validationSchema={
          Yup.object().shape({
            name: Yup.string()
              .min(2, 'השם הפרטי חייב לכלול לפחות 2 תווים')
              .max(64, 'השם הפרטי לא יכול לכלול יותר מ- 64 תווים')
              .required('יש למלא שם פרטי'),
            phone: Yup.string()
              .matches(/^[0-9+-]+$/, 'הטלפון יכול להיות מורכב רק ממספרים, פלוס (+) ומינוס (-)')
              .min(8, 'הטלפון חייב לכלול לפחות 8 מספרים')
              .max(16, 'הטלפון לא יכול לכלול יותר מ- 16 מספרים')
              .required('יש למלא מספר טלפון'),
            content: Yup.string()
              .max(4096, 'התוכן לא יכול לכלול יותר מ- 4,096 תווים'),
            recaptchaToken: Yup.string()
              .required('יש לאמת את זהותך')
              .nullable(),
          })
        }
        onSubmit={(values, formikHelpers) => {
          api.submitContactForm(values)
            .then(() => {
              setLastResponse({
                isSuccessful: true,
                message: undefined,
              });
            })
            .catch((error) => {
              setLastResponse({
                isSuccessful: false,
                message: error.message,
              });
            })
            .finally(() => {
              recaptchaRef?.current?.reset();
              setIsResponseVisible(true);
              formikHelpers.setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={styles['form']}
            noValidate
          >
            <p className={styles['description']}>
              רוצים לדבר? צרו איתי קשר באחד מהאמצעים למטה, או השאירו את פרטיכם ואחזור אליכם בהקדם 😊
            </p>

            <div className={styles['row']}>
              <label htmlFor={`${id}-name`} className={styles['field']}>
                <input
                  id={`${id}-name`}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={classNames(
                    styles['field-input'],
                    values.name && styles['field-input_has-value'],
                  )}
                  disabled={isSubmitting}
                />

                <span
                  className={classNames(
                    styles['field-label'],
                    styles['field-label_required'],
                  )}
                >
                  שם פרטי
                </span>

                <p className={styles['field-error']}>
                  {errors.name && touched.name && errors.name}
                </p>
              </label>

              <label htmlFor={`${id}-phone`} className={styles['field']}>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={classNames(
                    styles['field-input'],
                    values.phone && styles['field-input_has-value'],
                  )}
                  disabled={isSubmitting}
                />

                <span
                  className={classNames(
                    styles['field-label'],
                    styles['field-label_required'],
                  )}
                >
                  מספר טלפון
                </span>

                <p className={styles['field-error']}>
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </label>
            </div>

            <label htmlFor={`${id}-content`} className={styles['field']}>
              <textarea
                id={`${id}-content`}
                name="content"
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classNames(
                  styles['field-input'],
                  styles['field-input_expanded'],
                  values.content && styles['field-input_has-value'],
                )}
                disabled={isSubmitting}
              />

              <span className={styles['field-label']}>
                פרטים נוספים
              </span>

              <p className={styles['field-error']}>
                {errors.content && touched.content && errors.content}
              </p>
            </label>

            <div className={styles['recaptcha-container']}>
              <span
                className={classNames(
                  styles['field-label'],
                  styles['field-label_static'],
                )}
              >
                אימות אנושיות
              </span>

              <ReCAPTCHA
                sitekey={REACT_APP_RECAPTCHA_KEY}
                onChange={(changedValue) => setFieldValue('recaptchaToken', changedValue)}
                hl="iw"
                size={
                  deviceType !== Device.Mobile
                    ? 'normal'
                    : 'compact'
                }
                ref={recaptchaRef}
              />

              <p className={styles['field-error']}>
                {errors.recaptchaToken && touched.recaptchaToken && errors.recaptchaToken}
              </p>
            </div>

            <Button
              type="submit"
              className={styles['submit-button']}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'שולח הודעה...' : 'שלח הודעה'}
            </Button>

            <div
              className={classNames(
                styles['response-container'],
                isResponseVisible && styles['response-container_visible'],
              )}
            >
              <button
                type="button"
                onClick={closeResponse}
                className={styles['close-button']}
                title="סגירה"
                aria-label="סגירה"
              />

              <h2 className={styles['response-title']}>
                {
                  lastResponse?.isSuccessful
                    ? 'נשלח בהצלחה 🎉'
                    : 'שגיאת שרת 😔'
                }
              </h2>

              <p className={styles['response-message']}>
                {
                  lastResponse?.isSuccessful
                    ? 'אעשה את מירב המאמצים לחזור בהקדם.'
                    : lastResponse?.message
                }
              </p>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
