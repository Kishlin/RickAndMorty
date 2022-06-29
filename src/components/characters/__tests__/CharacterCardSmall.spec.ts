import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CharacterCardSmall from "../CharacterCardSmall.vue";

describe("CharacterCardSmall", () => {
  it("writes the name of the character", () => {
    const wrapper = mount(CharacterCardSmall, {
      props: {
        character: {
          name: "name",
          picture: "picture",
        },
      },
    });

    expect(wrapper.text()).toContain("name");
  });
});
