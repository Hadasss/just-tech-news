const { format_date } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/20");
});

test("format_plural() returns singular or plural accordingly", () => {
  const single = ("Tiger", 2);
  const plural = ("Lion", 1);

  expect(format_plural("tiger", 2)).toBe("tigers");
  expect(format_plural("lion", 1)).toBe("lion");
});

test("format_url() returns a simplified url string", () => {
  const url1 = format_url("http://test.com/page/1");
  const url2 = format_url("https://www.coolstuff.com/asdhr");
  const url3 = format_url("https://www.google.com?q=hello");

  expect(url1).toBe("test.com");
  expect(url2).toBe("coolstuff.com");
  expect(url3).toBe("google.com");
});
