<script lang="ts">
export default {
  name: "sol-slider",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

export interface Slide {
  label: string;
  paragraph: string;
  image: string;
}

export interface SliderProps {
  slides: Slide[];
}

const props = defineProps<SliderProps>();

const currentSlideId = ref(0);

const downX = ref(1);
const upX = ref(1);

function slideLeft() {
  if (currentSlideId.value > 0) {
    currentSlideId.value--;
  } else {
    currentSlideId.value = props.slides.length - 1;
  }
}

function slideRight() {
  if (currentSlideId.value < props.slides.length - 1) {
    currentSlideId.value++;
  } else {
    currentSlideId.value = 0;
  }
}

function gesturedSlide() {
  if (downX.value + 100 < upX.value) {
    slideLeft();
  } else if (downX.value > upX.value + 100) {
    slideRight();
  }
}

function listenToMouseDown(e: MouseEvent) {
  downX.value = e.clientX;
}

function listenToMouseUp(e: MouseEvent) {
  upX.value = e.clientX;
  gesturedSlide();
}

const listenToTouchStart = (e: TouchEvent) => {
  downX.value = e.touches[0].clientX;
};

const listenToTouchEnd = (e: TouchEvent) => {
  upX.value = e.changedTouches[0].clientX;
  gesturedSlide();
};
</script>

<template>
  <div
    class="slider"
    v-if="props.slides"
    @mousedown="listenToMouseDown"
    @mouseup="listenToMouseUp"
    @touchstart="listenToTouchStart"
    @touchend="listenToTouchEnd"
  >
    <div
      class="slider__slide-container"
      :style="{ transform: `translateX(calc(-100% * ${currentSlideId}))` }"
    >
      <div
        class="slider__slide"
        v-for="(slide, index) in props.slides"
        :key="index"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <h1>{{ slide.label }}</h1>
        <p>{{ slide.paragraph }}</p>
      </div>
    </div>

    <div class="slider__dot-navigation">
      <button
        v-for="(slide, index) in props.slides"
        :key="index"
        class="slider__dot"
        :class="{ 'slider__dot--active': index === currentSlideId }"
        @click="currentSlideId = index"
      ></button>
    </div>

    <button class="slider__btn slider__btn--left" @click="slideLeft()">
      <img src="@/assets/icons/arrow-left.svg" alt="left" />
    </button>
    <button class="slider__btn slider__btn--right" @click="slideRight()">
      <img src="@/assets/icons/arrow-right.svg" alt="right" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./Slider.scss";
</style>
