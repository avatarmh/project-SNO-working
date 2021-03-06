'use strict';

// set up ajax request
$(".demo").submit((event) => {
  event.preventDefault()
  const url = "/api/auth/login";
  var username = $("input[name=email]").val();
  var password = $("input[name=password]").val();
  const userDetails = {
    username,
    password
  };
  $.ajax({
    url,
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(userDetails),
    success: (data) => {
      console.log(data)
      localStorage.setItem ("token", data.authToken)
      localStorage.setItem ("userID", data.userID)
      window.location.href = "/member-news.html"
    },
    error: (error) => {
      console.log(error);
      alert("Unauthorized");
    }
  });

})