import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SearchBar from "../SearchBar.vue";

describe("SearchBar", () => {
  it("writes the filter in the search bar", () => {
    const wrapper = mount(SearchBar, {
      props: {
        modelValue: "current",
      },
    });

    expect(wrapper.find("input").element.value).toEqual("current");
  });
});
