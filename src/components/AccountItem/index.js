import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/79f076e483316ba016b92f05452e343c.jpeg?lk3s=a5d48078&nonce=80289&refresh_token=c58a4ff5a7ef5d3b98486fbd8b41a6a5&x-expires=1739012400&x-signature=yBfYA7UpLbP%2BgNBgaR26Z0sUjvU%3D&shp=a5d48078&shcp=81f88b70" alt="hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Trần Thị Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hoanguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;