import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CharacterStatusFilter from "../CharacterStatusFilter.vue";

describe("CharacterStatusFilter", () => {
  it("shows the checkboxes", () => {
    const wrapper = mount(CharacterStatusFilter, {
      props: {
        alive: true,
        dead: true,
        unknown: true,
        toggleDead: () => null,
        toggleAlive: () => null,
        toggleUnknown: () => null,
      },
    });

    expect(wrapper.text()).toContain("Dead");
    expect(wrapper.text()).toContain("Alive");
    expect(wrapper.text()).toContain("Unknown");
  });
});
