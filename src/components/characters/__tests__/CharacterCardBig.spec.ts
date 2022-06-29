import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CharacterCardBig from "../CharacterCardBig.vue";

describe("CharacterCardBig", () => {
  it("writes the name of the character", () => {
    const wrapper = mount(CharacterCardBig, {
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
