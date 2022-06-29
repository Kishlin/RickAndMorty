import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PaginationNav from "../PaginationNav.vue";

describe("PaginationNav", () => {
  it("can show 1 page", () => {
    const wrapper = mount(PaginationNav, {
      props: {
        currentPage: 0,
        pages: 1,
        moveToPage: () => null,
      },
    });

    expect(wrapper.findAll("button")).toHaveLength(1);
    expect(wrapper.find("button[disabled]").text()).toEqual("1");
  });

  it("can show pages left", () => {
    const wrapper = mount(PaginationNav, {
      props: {
        currentPage: 1,
        pages: 2,
        moveToPage: () => null,
      },
    });

    expect(wrapper.findAll("button")).toHaveLength(2);
    expect(wrapper.find("button[disabled]").text()).toEqual("2");

    expect(wrapper.text()).toContain("1");
    expect(wrapper.text()).toContain("2");
  });

  it("can show pages right", () => {
    const wrapper = mount(PaginationNav, {
      props: {
        currentPage: 0,
        pages: 2,
        moveToPage: () => null,
      },
    });

    expect(wrapper.findAll("button")).toHaveLength(2);
    expect(wrapper.find("button[disabled]").text()).toEqual("1");

    expect(wrapper.text()).toContain("1");
    expect(wrapper.text()).toContain("2");
  });

  it("can show a complex pagination", () => {
    const wrapper = mount(PaginationNav, {
      props: {
        currentPage: 3,
        pages: 10,
        moveToPage: () => null,
      },
    });

    expect(wrapper.findAll("button")).toHaveLength(10);
    expect(wrapper.find("button[disabled]").text()).toEqual("4");

    for (let i = 1; i <= 10; ++i) {
      expect(wrapper.text()).toContain(i);
    }
  });
});
