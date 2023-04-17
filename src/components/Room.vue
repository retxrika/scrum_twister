<template>
    <main>
        <div class="top__room row">
            <div class="message__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 77.29">
                <g>
                    <path class="message__icon__svg" d="M54.85,1H11.78A7.57,7.57,0,0,0,4,8.27V45.48L1.05,57.6a1.93,1.93,0,0,0,3,1.93l11.7-6.79H54.85a7.56,7.56,0,0,0,7.83-7.26V8.27A7.56,7.56,0,0,0,54.85,1Z"/>
                    <g>
                    <path class="message__icon__svg" d="M69.58,29.61H41a8.63,8.63,0,0,0-8.63,8.63v22.9A8.63,8.63,0,0,0,41,69.77H65.27l12.6,6.28a2.16,2.16,0,0,0,3-2.61l-2.66-8V38.24A8.63,8.63,0,0,0,69.58,29.61Z"/>
                    <g>
                        <circle class="message__icon__dot__svg" cx="42.04" cy="49.69" r="3.24"/>
                        <circle class="message__icon__dot__svg" cx="55.29" cy="49.69" r="3.24"/>
                        <circle class="message__icon__dot__svg" cx="68.53" cy="49.69" r="3.24"/>
                    </g>
                    </g>
                </g>
                </svg>
            </div>
        </div>
        <div class="form__room column">
            <div class="logo">
                <Vue3Lottie :animationData="logo"></Vue3Lottie>
            </div>
            <div class="arrow__and__name row">
                <div class="form__el form__name">{{ name }}</div>
                <svg @click="changeName(), changeAsk()" class="button__arrow" viewBox="0 0 86.7 87.1">
                    <path class="arrow" d="M65.6,45.6c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1
                    c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1
                    c0-0.2,0-0.4,0-0.6c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1
                    c0,0,0-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1
                    c-0.1-0.1-0.1-0.2-0.2-0.2L45.8,21.9c-1.2-1.2-3.2-1.2-4.5,0c-1.2,1.2-1.2,3.2,0,4.5l14.1,14.1H15.8c-1.8,0-3.2,1.4-3.2,3.2
                    c0,1.8,1.4,3.2,3.2,3.2h39.6L41.3,60.9c-1.2,1.2-1.2,3.2,0,4.5c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9l19.5-19.5
                    c0.1-0.1,0.1-0.2,0.2-0.2C65.6,45.6,65.6,45.6,65.6,45.6z"/>
                    <path class="circle" d="M43.7,84.3L43.7,84.3c-22.4,0-40.6-18.2-40.6-40.6v0c0-22.4,18.2-40.6,40.6-40.6h0c22.4,0,40.6,18.2,40.6,40.6
                    v0C84.3,66.1,66.1,84.3,43.7,84.3z"/>
                </svg>
            </div>
            <div class="form__el form__ask">{{ ask }}</div>
            <div class="clock">
                <Vue3Lottie :animationData="clock"></Vue3Lottie>
            </div>
        </div>
        <div class="clouds colomn">
            <svg viewBox="0 0 2187 1334" preserveAspectRatio="none">
                <path class="a" d="M2092.63,652.06c-30.12,10.74-63.58-5.58-102.77-24.7-104.11-50.78-95-116.89-195-191.95-84.31-63.25-112.83-32.84-195-104.39-56.13-48.86-55.43-74-115.62-122.35-88.24-70.88-154.38-68.76-154.16-87.56.64-53.89,546.27-243.25,762.63,0C2242.14,289.2,2192.33,616.5,2092.63,652.06Z"/>
            </svg>
            <svg viewBox="0 0 2187 1334" preserveAspectRatio="none">
                <path class="a" d="M124.21,658.54c39.65-11.13,83.69,5.78,135.27,25.58,137,52.61,125,121.09,256.71,198.84,111,65.52,148.52,34,256.72,108.14,73.88,50.61,73,76.66,152.18,126.74,116.14,73.42,203.2,71.23,202.91,90.7-.84,55.82-719,252-1003.79,0C-72.57,1034.42-7,695.38,124.21,658.54Z"/>
            </svg>
        </div>
    </main>
</template>

<script>
import clock from '../../public/clock.json'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
    name: 'loadingRoom',
    beforeMount() {
        this.changeName();
        this.changeAsk();
    },
    components: {
        Vue3Lottie,
    },
    data() {
        return {
            name,
            clock
        }
    },
    methods: {
        changeName() {
            const names = ["Кодобрат №1", 
                            "Кодобрат №2", 
                            "Кодобрат №3",
                            "Кодобрат №4", 
                            "Кодобрат №5", 
                            "Кодобрат №6",];
            const randomName = names[Math.floor(Math.random() * names.length)];
            this.name = randomName;
            console.log(this.name)
        },
        changeAsk() {
            const startAsk = ["Дайте вредный совет", "Дайте полезный совет"];
            const endAsk = ["абитуриенту, поступающему на программиста", 
                            "школьнику, которого назначили Senior'ом", 
                            "программисту, у которого дедлайн через день", 
                            "девятилетнему ребенку, начавшему изучать программирование", 
                            "стажеру в первый рабочий день", 
                            "тимлиду с одним членом команды", 
                            "застенчивому скрам-мастеру",
                            "программисту, который пишет код только на телефоне", 
                            "веб-дизайнеру, работающему в ОС Windows XP", 
                            "невнимательному тестировщику", 
                            "верстальщику перед сном", 
                            "начинающему программисту, выбирающему текстовый редактор",
                            "программисту, написавшему Спагетти-код",
                            "преподавателю по программированию",
                            "HR-у, набирающего команду разработчиков",
                            "fullstack разработчику, который не доделал ни один проект",
                            "дизайнеру, выбирающему ноутбук",
                            "заказчику, выбирающему IT-компанию",
                            "студенту-программисту перед сессией"];

            const randomAsk = startAsk[Math.floor(Math.random() * startAsk.length)] + " " +
                            endAsk[Math.floor(Math.random() * endAsk.length)] + ".";

            this.ask = randomAsk;
        },
    }
}
</script>

<style>
.top__room {
    justify-content: flex-end;
    padding: 10px;
	z-index: 100;
}

.arrow__and__name {
    justify-content: center;
    align-items: center;
}

.button__arrow {
    height: 80%;
    cursor: pointer;
}

.button__arrow .arrow {
    fill: white;
}

.button__arrow .circle {
    fill: none;
    stroke: white;
    stroke-width: 3px;
}

.form__room {
    position: absolute;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
    margin-top: -5%;
	z-index: 2;
}

.form__el {
    text-align: center;
	margin: 10px;
	padding: 8px;
	border: 3px solid white;
	border-radius: 30px;
    color: white;
}

.form__name {
    min-width: 10%;
}

.form__ask {
    min-width: 50%;
    width: 50%;
}

.clock {
    width: 7%;
    filter: invert(98%) sepia(31%) saturate(10%) hue-rotate(219deg) brightness(103%) contrast(102%);
}

@media (max-width: 700px) {
    .clock {
        width: 15%;
    }
}

.message__icon {
    width: 4%;
    z-index: 100;
    margin-right: 5%;
    cursor: pointer;
    opacity: 0;
}

.message__icon__svg {
    height: 30%;
    width: 30%;
    fill: #fff;
    stroke: #4a90ff;
    stroke-miterlimit: 10;
    stroke-width: 2px;
}

.message__icon__dot__svg {
    fill: #7aadf1;
}

.clouds svg:first-child {
	top: -22%;
}

.clouds svg:last-child {
	right: 7%;
}

</style>