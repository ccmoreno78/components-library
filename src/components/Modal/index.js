import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './modal.module.css';

const cx = classnames.bind(styles);

/**
 *
 * Componente modal personalizado
 * @param {boolean} show
 * @param {Function} [()=>{}] close
 * @param {*|JSX.Element} children
 * @returns {*|JSX.Element}
 */
const Modal = ({show, close, children}) => {
  return (
    show
    && (
      <div
        className={styles.modalContainer}
      >
        <div
          className={styles.modalShadow}
          onClick={()=>{
            close(false)
          }}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
          aria-label="Close Modal"
        />
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  /**
   * Controla apertura del modal
   */
  show: propTypes.bool.isRequired,
  /**
   * Contenido del modal
   */
  children: propTypes.node.isRequired,
  /**
   * Función de apertura y cierre del modal
   */
  close: propTypes.func,
}

Modal.defaultProps={
  close: () => {},
}

export default Modal;
