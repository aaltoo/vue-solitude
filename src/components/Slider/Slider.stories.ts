import SolSlider from "./Slider.vue";
import { StoryObj, Meta } from "@storybook/vue3";
import { html } from "code-tag";

export default {
  title: "Components/Slider",
  component: SolSlider,
  args: {
    slides: [
      {
        label: "Label 1",
        paragraph: "Paragraph 1",
        image:
          "https://wegotthiscovered.com/wp-content/uploads/2022/11/himeno.jpg",
      },
      {
        label: "Label 2",
        paragraph: "Paragraph 2",
        image:
          "https://api.duniagames.co.id/api/content/upload/file/6563548601677501657.jpg",
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
