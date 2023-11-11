import SolSlider from "./Slider.vue";
import { StoryObj, Meta } from "@storybook/vue3";
import { html } from "code-tag";

export default {
  title: "Components/Slider",
  component: SolSlider,
  args: {
    slides: [
      {
        label: "Himeno",
        paragraph: "is best girl",
        image:
          "https://wegotthiscovered.com/wp-content/uploads/2022/11/himeno.jpg",
      },
      {
        label: "It gets lonely",
        paragraph: "at the top",
        image:
          "https://mountainhouse.com/cdn/shop/articles/denali-national-park-in-alaska-feature-image-min_1024x.jpg?v=1624973320",
      },
      {
        label: "All I know is grind",
        image:
          "https://medialeaks.ru/wp-content/uploads/2023/01/sajt-dasha-4.jpg",
      },
    ],
  },
  argTypes: {},
} as Meta<typeof SolSlider>;

export const Default: StoryObj<typeof SolSlider> = {
  render: (args) => ({
    components: { SolSlider },
    setup() {
      return { args };
    },
    template: html`<sol-slider :slides="args.slides"></sol-slider>`,
  }),
};
