<template>
    <div class="waiting__container">
        <span class="waiting">Ожидание начала разминки...</span>
    </div>
</template>

<script>
export default {
    name: 'loadingRoom',
    created () {
      setTimeout(() => this.$router.push({ path: '/room'}), 10000);
    }
}
</script>

<style>
.waiting__container {
  display: flex;
  height: 100vh;
  background-color: #83ADFF;
  justify-content: center;
  text-align: center;
  align-items: center;
}

@keyframes linearGradientMove {
  100% {
    background-position: 16px 0, -16px 100%, 0 -16px, 100% 16px;
  }
}

.waiting {
  position: relative;
  margin: auto;
  width: 35vw;
  line-height: 10vh;
  text-align: center;
  color: #fff;
  font-size: 23px;
  border-radius: 10px;
  background: #83ADFF;
  transition: all 0.3s;
}
.waiting::before, .waiting::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px dashed white;
  transition: all 0.5s;
  animation: clippath 3s infinite linear;
  border-radius: 45px;
}
.waiting::after {
  animation: clippath 3s infinite -1.5s linear;
}

@keyframes clippath {
  0%, 100% {
    -webkit-clip-path: inset(0 0 98% 0);
            clip-path: inset(0 0 98% 0);
  }
  25% {
    -webkit-clip-path: inset(0 98% 0 0);
            clip-path: inset(0 98% 0 0);
  }
  50% {
    -webkit-clip-path: inset(98% 0 0 0);
            clip-path: inset(98% 0 0 0);
  }
  75% {
    -webkit-clip-path: inset(0 0 0 98%);
            clip-path: inset(0 0 0 98%);
  }
}
.bg::before {
  background: #83adff;
}
</style>