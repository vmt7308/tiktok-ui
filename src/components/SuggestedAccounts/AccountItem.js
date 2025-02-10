import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2baf8880778c2ad02a0e9af8e0f75a8b.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&nonce=33391&refresh_token=6ac681fef94df2113be6631714753a16&shcp=-&shp=30310797&x-expires=1739282400&x-signature=qs2DxeqevJZQPxzZ3oO1hsuhW5Y%3D"
                alt="avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>hoanguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Trần Thị Hoa</p>
            </div>
        </div>
    );
}

export default AccountItem;
