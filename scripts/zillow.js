$(document).ready(() => {

  class Handlers {
    constructor() {

    }

    getComps (zpid) {
      console.log("GETTING COMPS", zpid)
      $.get("http://localhost:8080/zillow/findComps", {zpid:zpid}, (data) => {
        console.log("response")
        if (data) {
          console.log("data:", data);
        }
      });
    }
  }

  const app = {};

  app.actions = new Handlers();

  // handlers
  $(".area-code-search").on('click', () => {
    let zpid = $(".area-code-input").val();

    if (zpid) {
      app.actions.getComps(parseInt(zpid));
    }
  });
});
