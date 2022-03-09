import PropTypes from 'prop-types';
import { BiCommentError } from 'react-icons/bi';
import css from './ErrorPage.module.css';

function ErrorPage({ text }) {
  return (
    <div className={css.wrapper}>
      <BiCommentError className={css.icon} />
      <p className={css.text}>{text}</p>
    </div>
  );
}

ErrorPage.prototype = {
  text: PropTypes.string.isRequired,
};

export default ErrorPage;
