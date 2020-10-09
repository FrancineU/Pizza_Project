$(document).ready(function () {
  $(".ordering").hover(function () {
      $("#pizzaOrders").show();

  });

  $("#add-order").click(function () {
      $("#new-orders").append('<div class="new-order">' +
          '<div class="form-group">' +
          '<label for="new-size">Size</label>' +
          '<select class="form-control new-size">' +
          '<option>select size</option>' +
          '<option>small</option>' +
          '<option>medium</option>' +
          '<option>large</option>' +
          '</select>' +

          '</div>' +
          '<div class="form-group">' +
          '<label for="new-topping">topping</label>' +
          '<select class="form-control new-topping">' +
          '<option>select topping</option>' +
          '<option>bacon</option>' +
          '<option>mushrooms</option>' +
          '<option>onions</option>' +
          '</select>' +
          '</div>' +

          '<div class="form-group">' +
          '<label for="new-crust">Crust</label>' +
          '<select class="form-control new-crust">' +
          '<option value="" disabled selected>select crust</option>' +
          '<option>crispy</option>' +
          '<option>stuffed</option>' +
          '<option>gluten-free</option>' +
          '</select>' +
          '</div>' +

          '</div>');
  });
  function Pizza(firstName, lastName, deliver) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.deliver=deliver
      this.orders = [];
  }
  function Order(size, topping, crust) {
      this.size = size;
      this.topping = topping;
      this.crust = crust;
  };

  $("form#new-pizza").submit(function (event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedDeliverMode=$(".new-delivery").val();
      var newPizza = new Pizza(inputtedFirstName, inputtedLastName, inputtedDeliverMode);

      $(".new-order").each(function () {
          // var inputtedSize = $(this).find('option:selected').attr("name");
          var inputtedSize = $(this).find(".new-size").val();
          var inputtedTopping = $(this).find(".new-topping").val();
          var inputtedCrust = $(this).find(".new-crust").val();
          var newOrder = new Order(inputtedSize, inputtedTopping, inputtedCrust)
          newPizza.orders.push(newOrder)
      });

      Pizza.prototype.fullName = function () {
          return this.firstName + " " + this.lastName;
      }
      Order.prototype.fullOrder = function () {
          return this.size + " ," + this.topping + " ," + this.crust;
      }


      $("ul#names").append("<li><span class='order'>" + newPizza.fullName() + "</span></li>");
      $("ul#deliver").append("<li><span class='order'>" + newPizza.deliver + "</span></li>");
          newPizza.orders.forEach(function (order) {
          $("ul#pizzass").append("<li>" + order.fullOrder() +"</li>");

      });


      $(".pizza").last().click(function () {
          $("#show-order").show();
          $("#show-order h2").text(newPizza.fullName());
          $("#show-order h2").text(newPizza.deliver);
          // $("ul#pizzass").text("");
          newPizza.orders.forEach(function (order) {
              $("ul#pizzass").append("<li>" + newPizza.fullOrder + "</li>");

          });
          $("#show-order h2").text(newPizza.orders);


          });
      });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $(".new-size").val("");
      $(".new-topping").val("");
      $(".new-crust").val("");

  });