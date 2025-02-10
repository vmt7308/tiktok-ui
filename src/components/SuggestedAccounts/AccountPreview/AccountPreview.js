import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2baf8880778c2ad02a0e9af8e0f75a8b.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&nonce=33391&refresh_token=6ac681fef94df2113be6631714753a16&shcp=-&shp=30310797&x-expires=1739282400&x-signature=qs2DxeqevJZQPxzZ3oO1hsuhW5Y%3D"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hoanguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Trần Thị Hoa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6.7M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>429.9M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
