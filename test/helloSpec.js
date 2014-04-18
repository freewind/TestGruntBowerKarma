define(['hello'], function(Hello) {
  describe("Hello.hello", function() {
    it("will return greeting with username", function() {
      expect(Hello.hello("Freewind")).toBe("Hello, Freewind!");
    });
  });
});
