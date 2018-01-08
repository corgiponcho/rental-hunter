$(document).ready(() => {
  $(".area-code-search").on('click', () => {
    console.log("clicked search")

    let zpid = $(".area-code-input").val();

    $.get("http://localhost:8080/findComps", {zpid:zpid}, (data) => {
      console.log("response")
      if (data) {
        console.log("data:", data);

        let address = `<div class='address'>${data[0].address[0].city[0]}</div>`

        $(".search-results").append(address)
      }
    })
  })
});
