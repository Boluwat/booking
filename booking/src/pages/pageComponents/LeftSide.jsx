/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from '../../assets/styles/Login/Login.module.scss';
import MimaLogo from '../../assets/img/mima-logo.png';
import React from 'react';

import SliderImg2 from '../../assets/img/Mimaweb-1.png';
import SliderImg3 from '../../assets/img/Mimaweb-2.png';
import SliderImg1 from '../../assets/img/Mimaweb.png';

// import ImageSlider2 from '../../components/ImageSlider/ImageSlider2';
// import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import LeftSideSlider from './LeftSideSlider';
import constant from '../../utils/constant';

function LeftSide(props) {
	const slides = [
		{ img: SliderImg1, title: 'Slider 1' },
		{ img: SliderImg2, title: 'Slider 2' },
		{ img: SliderImg3, title: 'Slider 3' },
	];

	const isBelow900 = useMediaQuery({
		query: '(max-width: 900px)',
	});
	const isBelow500 = useMediaQuery({
		query: '(max-width: 500px)',
	});

	const navigate = useNavigate();

	const goToLanding = () => {
		navigate(constant.Routes.Home);
	};

	return (
		<div className={styles.leftside}>
			<img src={MimaLogo} className={styles.logo} onClick={goToLanding} />
			<div className={styles.slider}>
				{/* {!isBelow500 && <img src={SliderImg1} className={styles.slider__img} />} */}
				<h3 className={styles.slider__title}>{props.title}</h3>
				{!isBelow900 && (
					<div className={styles.slider__p}>
						Mima is designed to help you manage your business. With Mima you can
						monitor your income and expenses, send receipts and invoices, get
						indepth analysis of how your business is performing and so much
						more.{' '}
						<span className={styles.color__primary}>
							Start using Mima today.
						</span>
					</div>
				)}
				{!isBelow900 && (
					<div className={styles.slider__icon}>
						<div className={styles.slider__icon__default}></div>
						<div className={styles.slider__icon__outline}></div>
						<div className={styles.slider__icon__outline}></div>
					</div>
				)}
			</div>
		</div>
	);
}

export default LeftSide;
