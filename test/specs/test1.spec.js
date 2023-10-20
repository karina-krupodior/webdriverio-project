describe("Demo test", function () {
  it("My first test", async () => {
    browser.url("https://google.com");
    const searchInput = $('[name="q"]');

    await searchInput.setValue("Karina");
    await $('[name="btnK"]').click();
    await browser.keys("Enter");
    browser.pause(2000);
  });
});
