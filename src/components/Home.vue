<template>
    <div class="top__home row">
        <h1 class="slogan">SCRUM TWISTER</h1>
        <button class="btn__create_team">Создать команду</button>
    </div>
    <form action="/loading_room" method="get" class="form__home column">
        <div class="logo">
            <Vue3Lottie :animationData="logo"></Vue3Lottie>
        </div>
        <input type="text" name="" id="code" placeholder="Введите код комнаты">
        <input type="text" name="" id="name" placeholder="Как вас называть?">
        <button type="submit" class="btn__start__game">Начать разминку</button>
    </form>
    <div class="clouds colomn">
        <svg viewBox="0 0 2187 1334" preserveAspectRatio="none">
            <path class="a" d="M2092.63,652.06c-30.12,10.74-63.58-5.58-102.77-24.7-104.11-50.78-95-116.89-195-191.95-84.31-63.25-112.83-32.84-195-104.39-56.13-48.86-55.43-74-115.62-122.35-88.24-70.88-154.38-68.76-154.16-87.56.64-53.89,546.27-243.25,762.63,0C2242.14,289.2,2192.33,616.5,2092.63,652.06Z"/>
        </svg>
        <svg viewBox="0 0 2187 1334" preserveAspectRatio="none">
            <path class="a" d="M124.21,658.54c39.65-11.13,83.69,5.78,135.27,25.58,137,52.61,125,121.09,256.71,198.84,111,65.52,148.52,34,256.72,108.14,73.88,50.61,73,76.66,152.18,126.74,116.14,73.42,203.2,71.23,202.91,90.7-.84,55.82-719,252-1003.79,0C-72.57,1034.42-7,695.38,124.21,658.54Z"/>
        </svg>
    </div>
</template>

<script>
import logo from '../../public/data.json'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
    name: 'home_page',
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            logo,
        }
    },
}
</script>

<style>
/* start top */

.top__home {
    justify-content: space-between;
    padding: 10px;
	z-index: 100;
}

.slogan {
    color: white;
    font-size: 20px;
	padding: 5px;
    font-family: 'Comfortaa bold';
}

.btn__create_team {
	border: 3px solid white;
	border-radius: 30px;
	background: none;
	color: white;
	padding: 5px;
	cursor: pointer;
	transition-duration: .13s;
	transition-property: color, border;
    z-index: 3;
}

.btn__create_team:hover {
	border: 3px solid #E3E3E3;
	color: #E3E3E3;
	cursor: pointer;
}

/* end top */

/* start background */

.clouds {
	position: absolute;
	width: 100%;
	height: 100%;
    z-index: 1;
}

.clouds svg {
	fill: #4a90ff;
	height: 100%;
	width: 100%;
	position: relative;
}

.clouds svg:first-child {
	left: 5%;
	top: -18%;
}

.clouds svg:last-child {
	top: -93%;
	right: 5%;
}
/* end background */

/* start form */
.form__home {
	position: absolute;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
    margin-top: -5%;
	z-index: 2;
}

.logo {
	max-width: 15%;
}

.form__home input {
	min-width: 30%;
	margin: 10px;
	padding: 8px;
	border: 3px solid white;
	border-radius: 30px;
}

.btn__start__game {
	border: 3px solid white;
	border-radius: 30px;
	background-color: white;
	cursor: pointer;
	margin-top: 10px;
	color: #5E636B;
	padding: 8px 16px 8px 16px;
	transition-duration: .13s;
	transition-property: background-color, border-color;
}

.btn__start__game:hover {
	cursor: pointer;
	background-color: #E3E3E3;
	border-color: #E3E3E3;
}

/* end form */
</style>

