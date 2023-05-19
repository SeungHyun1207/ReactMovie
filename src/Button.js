
/* PropTypes 체크 */
import PropTypes from "prop-types";
/* CSS import할때 주의할 점  ./로 시작해야 한다. */
import styles from "./css/Button.module.css";
function Button( {text} ){

    return <button className={styles.btn}>{text}</button>

}

Button.propTypes = {
    /* 버튼의 타입을 체크한다. */
    text: PropTypes.string.isRequired,
}

export default Button;